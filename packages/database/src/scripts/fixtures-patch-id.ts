import csvToJSON from '../libs/csv-to-json';
import jsonToCSV from '../libs/json-to-csv';
import { FixtureEntity } from '../models/fixture.entity';

const patchId = async (tier: string) => {
  let fixtures: Array<FixtureEntity> = await csvToJSON<FixtureEntity>(
    `./data/${tier}/fixtures.csv`
  );

  fixtures = fixtures.map((fixture) => {
    const competitionTier = fixture.competitionTier || '';
    const season = fixture.season || '';
    const round = fixture.round || '';
    const homeId = fixture.homeId || '';
    const awayId = fixture.awayId || '';
    const id = `${competitionTier}-${season}-${round}-${homeId}-${awayId}`;
    return { ...fixture, id };
  });

  const fields = [
    'id',
    'competition',
    'competitionTier',
    'season',
    'round',
    'status',
    'date',
    'time',
    'stadium',
    'homeId',
    'homeTeam',
    'homeScore',
    'awayScore',
    'awayId',
    'awayTeam',
    'winner',
  ];

  await jsonToCSV(fixtures, { fields }, `./data/${tier}/fixtures.csv`);
};

const main = async () => {
  const tiers = ['cup', 'v.league-1', 'v.league-2'];

  for (const tier of tiers) {
    await patchId(tier);
  }

  process.exit(0);
};

main().catch((error) => console.error(error));
