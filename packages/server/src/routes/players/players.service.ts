import { PlayerEntity } from 'shared';
import { getRepository } from '../../libs/postgre';

export const getPlayers = async ({
  skip = 0,
  limit = 50,
  teamId = '',
}: {
  skip: number;
  limit: number;
  teamId?: string;
}): Promise<PlayerEntity[]> => {
  const repository = await getRepository(PlayerEntity);
  let where = {};
  where = teamId ? { ...where, teamId } : where;
  const players = await repository.find({ where, take: limit, skip });
  return players;
};

export const getPlayer = async (
  playerId: string
): Promise<PlayerEntity | null> => {
  const repository = await getRepository(PlayerEntity);
  const player = await repository.findOne({ where: { playerId } });
  return player;
};
