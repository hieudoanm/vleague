import { Season, Team, Tier } from 'shared';
import { getTeam, getTeams } from '../services';

export const resolvers = {
  Query: {
    team: async (_: unknown, { teamId }: { teamId: string }): Promise<Team> => {
      return getTeam(teamId);
    },
    teams: async (
      _: unknown,
      {
        tier = Tier.TIER_ONE,
        season = Season.SEASON_CURRENT,
      }: { tier: Tier; season: Season }
    ): Promise<Team[]> => {
      return getTeams({ tier, season });
    },
  },
};
