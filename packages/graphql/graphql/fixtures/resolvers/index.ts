import get from 'lodash/get';
import { Team } from '../../teams/types';
import { Tier } from '../../types';
import { getFixture, getFixtures } from '../services';
import { Fixture, Status } from '../types';

export const resolvers = {
  Query: {
    fixture: async (_: unknown, { fixtureId }: { fixtureId: string }) => {
      return getFixture(fixtureId);
    },
    fixtures: async (
      _: unknown,
      {
        limit,
        season = new Date().getFullYear(),
        sortBy,
        status,
        teamId,
        tier = 'TIER_ONE',
      }: {
        limit?: number;
        season?: number;
        sortBy?: string;
        status?: Status;
        teamId?: string;
        tier?: Tier;
      }
    ): Promise<Fixture[]> => {
      return getFixtures({ limit, season, sortBy, status, teamId, tier });
    },
  },
  Team: {
    fixtures: async (parent: Pick<Team, 'teamId'>) => {
      const teamId: string = get(parent, 'teamId');
      const tier = get(parent, 'tier');
      return getFixtures({
        teamId,
        tier,
        status: 'SCHEDULED',
      });
    },
    results: async (parent: Pick<Team, 'teamId'>) => {
      const teamId: string = get(parent, 'teamId');
      const tier = get(parent, 'tier');
      return getFixtures({
        teamId,
        tier,
        status: 'FINISHED',
      });
    },
  },
};
