import { readFileSync } from 'fs';
import { Repository } from 'typeorm';
import { seasons, tiers } from '../../constants';
import csvToJSON from '../../libs/csv-to-json';
import { getDataSource, getRepository } from '../../libs/postgre';
import { StandingEntity } from '../../models/standing.entity';

const exportStandings = async (
  standingRepository: Repository<StandingEntity>,
  tier: string,
  season: number
) => {
  console.log('exportStandings', tier);

  const standings: StandingEntity[] = await csvToJSON<StandingEntity>(
    `./data/${tier}/standings/${season}.csv`
  );

  const standingEntities = standings.map((standing: StandingEntity) => {
    const newStanding = new StandingEntity();
    newStanding.standingId = standing.standingId;
    newStanding.competition = standing.competition || '';
    newStanding.competitionTier = standing.competitionTier || '';
    newStanding.season = standing.season || 0;
    newStanding.position = standing.position || 0;
    newStanding.teamId = standing.teamId || '';
    newStanding.team = standing.team || '';
    newStanding.played = standing.played || 0;
    newStanding.points = standing.points || 0;
    newStanding.won = standing.won || 0;
    newStanding.drawn = standing.drawn || 0;
    newStanding.lost = standing.lost || 0;
    newStanding.goals = standing.goals || 0;
    newStanding.goalsAgainst = standing.goalsAgainst || 0;
    newStanding.goalsDifference = standing.goalsDifference || 0;
    newStanding.yellowCards = standing.yellowCards || 0;
    newStanding.redCards = standing.redCards || 0;
    newStanding.note = standing.note || '';
    return newStanding;
  });

  console.log('exportStandings', tier, 'save');

  const data = await standingRepository.save(standingEntities);

  console.log(data);
};

const main = async () => {
  const sqlQuery = await readFileSync('./sql/standing.sql', 'utf-8');
  console.log(sqlQuery);

  const dataSource = await getDataSource();
  // await dataSource.query('DROP SCHEMA IF EXISTS vleague CASCADE');
  // await dataSource.query('CREATE SCHEMA IF NOT EXISTS vleague');
  await dataSource.query(sqlQuery);

  const standingRepository: Repository<StandingEntity> = await getRepository(
    StandingEntity
  );

  await standingRepository.clear();

  for (const tier of tiers) {
    for (const season of seasons) {
      await exportStandings(standingRepository, tier, season);
    }
  }

  process.exit(0);
};

main().catch((error) => console.error(error));
