import { getDataSource } from '../../libs/postgre';
import { readFileSync } from 'fs';

const main = async () => {
  const sqlQuery = await readFileSync('./sql/user.sql', 'utf-8');
  console.log(sqlQuery);

  const dataSource = await getDataSource();
  // await dataSource.query('DROP SCHEMA IF EXISTS vleague CASCADE');
  // await dataSource.query('CREATE SCHEMA IF NOT EXISTS vleague');
  await dataSource.query(sqlQuery);

  process.exit(0);
};

main().catch((error) => console.error(error));
