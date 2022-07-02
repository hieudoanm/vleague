import { readFileSync } from 'fs';
import { Repository } from 'typeorm';
import { seasons, tiers } from '../../constants';
import csvToJSON from '../../libs/csv-to-json';
import { getDataSource, getRepository } from '../../libs/postgre';
import { FixtureEntity } from '../../models/fixture.entity';

const exportFixtures = async (
  fixtureRepository: Repository<FixtureEntity>,
  tier: string,
  season: number
) => {
  console.log('exportFixtures', tier);

  const fixtures: FixtureEntity[] = await csvToJSON<FixtureEntity>(
    `./data/${tier}/fixtures/${season}.csv`
  );

  const fixtureEntities = fixtures.map((fixture: FixtureEntity) => {
    const newFixture = new FixtureEntity();
    newFixture.fixtureId = fixture.fixtureId;
    newFixture.competition = fixture.competition;
    newFixture.competitionTier = fixture.competitionTier;
    newFixture.season = fixture.season;
    newFixture.round = fixture.round;
    newFixture.status = fixture.status;
    newFixture.date = fixture.date;
    newFixture.time = fixture.time;
    newFixture.stadium = fixture.stadium;
    newFixture.homeId = fixture.homeId;
    newFixture.homeTeam = fixture.homeTeam;
    newFixture.homeScore = fixture.homeScore;
    newFixture.awayId = fixture.awayId;
    newFixture.awayTeam = fixture.awayTeam;
    newFixture.awayScore = fixture.awayScore;
    return newFixture;
  });

  console.log('exportFixtures', tier, 'save');

  const data = await fixtureRepository.save(fixtureEntities);

  console.log(data);
};

const main = async () => {
  const sqlQuery = await readFileSync('./sql/fixture.sql', 'utf-8');
  console.log(sqlQuery);

  const dataSource = await getDataSource();
  // await dataSource.query('DROP SCHEMA IF EXISTS vleague CASCADE');
  // await dataSource.query('CREATE SCHEMA IF NOT EXISTS vleague');
  await dataSource.query(sqlQuery);

  const fixtureRepository: Repository<FixtureEntity> = await getRepository(
    FixtureEntity
  );

  await fixtureRepository.clear();

  for (const tier of tiers) {
    for (const season of seasons) {
      await exportFixtures(fixtureRepository, tier, season);
    }
  }

  process.exit(0);
};

main().catch((error) => console.error(error));
