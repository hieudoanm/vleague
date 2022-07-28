import { TeamEntity, Tier } from 'shared';
import { getRepository } from '../../libs/postgre';

export const getTeams = async ({
  tier,
}: {
  tier: Tier;
}): Promise<TeamEntity[]> => {
  const repository = await getRepository(TeamEntity);
  return repository.find({ where: { tier } });
};

export const getTeam = async (teamId: string): Promise<TeamEntity | null> => {
  const repository = await getRepository(TeamEntity);
  return repository.findOne({ where: { teamId } });
};
