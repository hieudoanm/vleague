import isNil from 'lodash/isNil';
import { API_KEY_VLEAGUE, SERVER_API } from '../../../configs';
import { axiosGet, logger } from 'shared';
import { Tier } from '../../types';
import { Fixture, Status } from '../types';

export const getFixtures = async ({
  limit,
  season = new Date().getFullYear(),
  sortBy,
  status,
  teamId,
  tier,
}: {
  limit?: number;
  season?: number;
  sortBy?: string;
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
