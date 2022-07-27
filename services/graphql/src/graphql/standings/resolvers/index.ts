import get from 'lodash/get';
import { Season, Tier, Standing, Team } from 'shared';
import { getStandings } from '../services';

export const resolvers = {
  Query: {
    standings: async (
      _: unknown,
      {
        season = Season.SEASON_CURRENT,
        teamId,
        tier = Tier.TIER_ONE,
      }: { season?: Season; teamId?: string; tier?: Tier }
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
