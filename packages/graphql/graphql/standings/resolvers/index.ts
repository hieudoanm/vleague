import get from 'lodash/get';
import { Team } from '../../teams/types';
import { Tier } from '../../types';
import { getStandings } from '../services';
import { Standing } from '../types';

export const resolvers = {
  Query: {
    standings: async (
      _: unknown,
      {
        season = new Date().getFullYear(),
        teamId,
        tier = 'TIER_ONE',
      }: { season?: number; teamId?: string; tier?: Tier }
    ): Promise<Standing[]> => {
      return getStandings({ season, teamId, tier });
    },
  },
  Team: {
    standings: async (parent: Pick<Team, 'teamId' | 'tier'>) => {
      const teamId = get(parent, 'teamId');
      const tier = get(parent, 'tier');
      return getStandings({ teamId, tier });
    },
  },
};
