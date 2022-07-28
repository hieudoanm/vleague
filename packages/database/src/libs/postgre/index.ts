import 'reflect-metadata';
import {
  FixtureEntity,
  PlayerEntity,
  StandingEntity,
  TeamEntity,
  UserEntity,
} from 'shared';
import { DataSource, EntityTarget } from 'typeorm';
import {
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_PASS,
  DATABASE_PORT,
  DATABASE_USER,
} from '../../configs';

let postgresDataSource: DataSource | null = null;

export const getDataSource = async () => {
  if (postgresDataSource !== null) {
    return postgresDataSource;
  }

  postgresDataSource = new DataSource({
    type: 'postgres',
    host: DATABASE_HOST,
    port: parseInt(DATABASE_PORT, 10),
    username: DATABASE_USER,
    password: DATABASE_PASS,
    database: DATABASE_NAME,
    schema: 'vleague',
    entities: [
      FixtureEntity,
      PlayerEntity,
      StandingEntity,
      TeamEntity,
      UserEntity,
    ],
    synchronize: false,
    logging: true,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const initialized = await postgresDataSource.initialize();

  console.info({ initialized }, 'initialized');

  return postgresDataSource;
};

export const getRepository = async <T>(entity: EntityTarget<T>) => {
  const dataSource = await getDataSource();
  return dataSource.getRepository(entity);
};
