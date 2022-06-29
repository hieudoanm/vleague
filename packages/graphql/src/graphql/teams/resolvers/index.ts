import { Tier } from '../../types';
import { getTeam, getTeams } from '../services';
import { Team } from '../types';

export const resolvers = {
  Query: {
    team: async (_: unknown, { teamId }: { teamId: string }): Promise<Team> => {
      return getTeam(teamId);
    },
    teams: async (
      _: unknown,
      { tier, season }: { tier: Tier; season: number }
    ): Promise<Team[]> => {
      return getTeams({ tier, season });
    },
  },
};
