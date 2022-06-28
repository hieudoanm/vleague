import { getRepository } from '../../libs/postgre';
import { TeamEntity } from './teams.entity';

export const getTeams = async (): Promise<TeamEntity[]> => {
  const repository = await getRepository(TeamEntity);
  return repository.find();
};

export const getTeam = async (teamId: string) => {
  const repository = await getRepository(TeamEntity);
  return repository.findOne({ where: { teamId } });
};
