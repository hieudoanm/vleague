import 'reflect-metadata';
import { DataSource, EntityTarget } from 'typeorm';
import {
  DATABASE_URL,
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_PASS,
  DATABASE_PORT,
  DATABASE_USER,
} from '../../configs';
import { FixtureEntity } from '../../routes/fixtures/fixtures.entity';
import { PlayerEntity } from '../../routes/players/players.entity';
import { StandingEntity } from '../../routes/standings/standings.entity';
import { TeamEntity } from '../../routes/teams/teams.entity';
import { UserEntity } from '../../routes/users/users.entity';

let postgresDataSource: DataSource | null = null;

export const getDataSource = async () => {
  if (postgresDataSource !== null) {
    return postgresDataSource;
  }

  const databaseURL: string = DATABASE_URL.replace('postgres://', '');
  const [usernamePassword = '', hostPortDatabase = ''] = databaseURL.split('@');
  const [username = DATABASE_USER, password = DATABASE_PASS] =
    usernamePassword.split(':');
  const [hostPort = '', database = DATABASE_NAME] = hostPortDatabase.split('/');
  const [host = DATABASE_HOST, port = DATABASE_PORT] = hostPort.split(':');

  console.info('getDataSource', { host, port, username, password, database });

  postgresDataSource = new DataSource({
    type: 'postgres',
    host,
    port: parseInt(port, 10),
    username,
    password,
    database,
    schema: 'vleague',
    entities: [
      FixtureEntity,
      PlayerEntity,
      StandingEntity,
      TeamEntity,
      UserEntity,
    ],
    synchronize: false,
    logging: false,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await postgresDataSource.initialize();

  console.info('initialized');

  return postgresDataSource;
};

export const getRepository = async <T>(entity: EntityTarget<T>) => {
  const dataSource = await getDataSource();
  return dataSource.getRepository(entity);
};
