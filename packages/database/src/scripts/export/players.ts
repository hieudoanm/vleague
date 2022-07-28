import csvToJSON from '../../libs/csv-to-json';
import { getDataSource, getRepository } from '../../libs/postgre';
import { PlayerEntity } from '../../models/player.entity';
import { Repository } from 'typeorm';
import { readFileSync } from 'fs';

const main = async () => {
  const sqlQuery = await readFileSync('./sql/player.sql', 'utf-8');
  console.log(sqlQuery);

  const dataSource = await getDataSource();
  // await dataSource.query('DROP SCHEMA IF EXISTS vleague CASCADE');
  // await dataSource.query('CREATE SCHEMA IF NOT EXISTS vleague');
  await dataSource.query(sqlQuery);

  const playerRepository: Repository<PlayerEntity> = await getRepository(
    PlayerEntity
  );

  await playerRepository.clear();

  const players: PlayerEntity[] = await csvToJSON<PlayerEntity>(
    `./data/players.csv`
  );

  const playerEntities = players.map((player: PlayerEntity) => {
    const newPlayer = new PlayerEntity();
    newPlayer.playerId = player.playerId;
    newPlayer.shirtNumber = player.shirtNumber || 0;
    newPlayer.position = player.position || '';
    newPlayer.fullName = player.fullName || '';
    newPlayer.dateOfBirth = player.dateOfBirth || '';
    newPlayer.teamId = player.teamId || '';
    newPlayer.team = player.team || '';
    return newPlayer;
  });

  console.log('exportPlayers', 'save');

  const data = await playerRepository.save(playerEntities);

  console.log(data);

  process.exit(0);
};

main().catch((error) => console.error(error));
