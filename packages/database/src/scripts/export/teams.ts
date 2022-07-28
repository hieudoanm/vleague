import csvToJSON from '../../libs/csv-to-json';
import { getDataSource, getRepository } from '../../libs/postgre';
import { TeamEntity } from '../../models/team.entity';
import { Repository } from 'typeorm';
import { readFileSync } from 'fs';

const main = async () => {
  const sqlQuery = await readFileSync('./sql/team.sql', 'utf-8');
  console.log(sqlQuery);

  const dataSource = await getDataSource();
  // await dataSource.query('DROP SCHEMA IF EXISTS vleague CASCADE');
  // await dataSource.query('CREATE SCHEMA IF NOT EXISTS vleague');
  await dataSource.query(sqlQuery);

  const teamRepository: Repository<TeamEntity> = await getRepository(
    TeamEntity
  );

  await teamRepository.clear();

  const teams: TeamEntity[] = await csvToJSON<TeamEntity>(`./data/teams.csv`);

  const teamEntities = teams.map((team: TeamEntity) => {
    const newTeam = new TeamEntity();
    newTeam.teamId = team.teamId;
    newTeam.name = team.name || '';
    newTeam.fullName = team.fullName || '';
    newTeam.stadium = team.stadium || '';
    newTeam.province = team.province || '';
    newTeam.chairman = team.chairman || '';
    newTeam.manager = team.manager || '';
    newTeam.founded = team.founded || '';
    newTeam.active = team.active;
    newTeam.tier = team.tier || '';
    return newTeam;
  });

  console.log('exportTeams', 'save');

  const data = await teamRepository.save(teamEntities);

  console.log(data);

  process.exit(0);
};

main().catch((error) => console.error(error));
