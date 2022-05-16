import get from 'lodash/get';
import { Team } from '../../teams/types';
import { getPlayers } from '../services';
import { Player } from '../types';

export const resolvers = {
  Query: {
    players: async (
      _parent: undefined,
      {
        limit = 50,
        skip = 0,
        teamId,
      }: {
        limit?: number;
        skip?: number;
        teamId: string;
      }
    ): Promise<Player[]> => {
      return getPlayers({ limit, skip, teamId });
    },
  },
  Team: {
    players: async (parent: Pick<Team, 'teamId'>) => {
      const teamId: string = get(parent, 'teamId');
      return getPlayers({ teamId });
    },
  },
};

export default resolvers;
