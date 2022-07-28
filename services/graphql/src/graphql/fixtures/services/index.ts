import isNil from 'lodash/isNil';
import { API_KEY_VLEAGUE, SERVER_API } from '../../../configs';
import {
  axiosGet,
  logger,
  Tier,
  Status,
  Fixture,
  Season,
  FixtureSortBy,
} from 'shared';

export const getFixtures = async ({
  limit = 100,
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
}): Promise<Fixture[]> => {
  const urlSearchParams = new URLSearchParams();
  if (!isNil(limit)) urlSearchParams.set('limit', limit.toString());
  if (!isNil(season)) urlSearchParams.set('season', season.toString());
  if (!isNil(sortBy)) urlSearchParams.set('sortBy', sortBy);
  if (!isNil(status)) urlSearchParams.set('status', status);
  if (!isNil(teamId)) urlSearchParams.set('teamId', teamId);
  if (!isNil(tier)) urlSearchParams.set('tier', tier);
  const url = `${SERVER_API}/fixtures?${urlSearchParams.toString()}`;
  logger.info({ url, API_KEY_VLEAGUE }, 'getFixtures() url');
  const response = await axiosGet<{ data: Fixture[] }>(url, {
    headers: { 'X-API-KEY': API_KEY_VLEAGUE },
  });
  return response.data;
};

export const getFixture = async (
  fixtureId: string
): Promise<{ fixture: Fixture; head2head: Fixture[] }> => {
  const url = `${SERVER_API}/fixture?fixtureId=${fixtureId}`;
  logger.info({ url }, 'getFixture() url');
  return axiosGet<{
    fixture: Fixture;
    head2head: Fixture[];
    homeForm: Fixture[];
    awayForm: Fixture[];
  }>(url, {
    headers: { 'X-API-KEY': API_KEY_VLEAGUE },
  });
};
