import csvToJSON from '../libs/csv-to-json';
import jsonToCSV from '../libs/json-to-csv';
import { PlayerEntity } from '../models/player.entity';

const main = async () => {
  let players: Array<PlayerEntity> = await csvToJSON<PlayerEntity>(
    `./data/players.csv`
  );

  players = players.map((player) => {
    const teamId = player.teamId || '';
    const shirtNumber = player.shirtNumber || '';
    const playerId = `${teamId}-${shirtNumber}`;
    return { ...player, playerId };
  });

  const fields = [
    'playerId',
    'shirtNumber',
    'position',
    'fullName',
    'dateOfBirth',
    'teamId',
    'team',
    'height',
    'weight',
    'goals',
    'penalty',
    'yellowCards',
    'redCards',
  ];

  await jsonToCSV(players, { fields }, `./data/players.csv`);

  process.exit(0);
};

main().catch((error) => console.error(error));
