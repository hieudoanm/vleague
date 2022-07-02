import get from 'lodash/get';
import { Fixture, Status, Tier, Team, Season, FixtureSortBy } from 'shared';
import { getFixture, getFixtures } from '../services';

export const resolvers = {
  Query: {
    fixture: async (_: unknown, { fixtureId }: { fixtureId: string }) => {
      return getFixture(fixtureId);
    },
    fixtures: async (
      _: unknown,
      {
        limit,
        season = Season.SEASON_CURRENT,
        sortBy = FixtureSortBy.DATE,
        status = Status.SCHEDULED,
        teamId,
        tier = Tier.TIER_ONE,
      }: {
        limit?: number;
        season?: Season;
        sortBy?: FixtureSortBy;
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
        status: Status.SCHEDULED,
      });
    },
    results: async (parent: Pick<Team, 'teamId'>) => {
      const teamId: string = get(parent, 'teamId');
      const tier = get(parent, 'tier');
      return getFixtures({
        teamId,
        tier,
        status: Status.FINISHED,
      });
    },
  },
};
