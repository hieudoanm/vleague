import { getRepository } from '../../libs/postgre';
import { TeamEntity } from './teams.entity';

export const getTeams = async () => {
  const repository = await getRepository(TeamEntity);
  const teams = await repository.find();
  return teams;
};

export const getTeam = async (teamId: string) => {
  const repository = await getRepository(TeamEntity);
  const team = await repository.findOne({ where: { teamId } });
  return team;
};
