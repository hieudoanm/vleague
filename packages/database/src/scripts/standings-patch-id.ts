import csvToJSON from '../libs/csv-to-json';
import jsonToCSV from '../libs/json-to-csv';
import { StandingEntity } from '../models/standing.entity';

const patchId = async (key: string, folder: string) => {
  let standings: Array<StandingEntity> = await csvToJSON<StandingEntity>(
    `./data/${folder}/standings.csv`
  );

  standings = standings.map((standing) => {
    const season = standing.season || '';
    const position = standing.position || '';
    const standingId = `${key}-${season}-${position}`;
    return { ...standing, standingId };
  });

  const fields = [
    'standingId',
    'season',
    'position',
    'teamId',
    'team',
    'played',
    'points',
    'won',
    'drawn',
    'lost',
    'goals',
    'goalsAgainst',
    'goalsDifference',
    'yellowCards',
    'redCards',
    'note',
  ];

  await jsonToCSV(standings, { fields }, `./data/${folder}/standings.csv`);
};

const main = async () => {
  const tiers = [
    { key: 'TIER_CUP', folder: 'cup' },
    { key: 'TIER_ONE', folder: 'v.league-1' },
    { key: 'TIER_TWO', folder: 'v.league-2' },
  ];

  for (const { key, folder } of tiers) {
    await patchId(key, folder);
  }

  process.exit(0);
};

main().catch((error) => console.error(error));
