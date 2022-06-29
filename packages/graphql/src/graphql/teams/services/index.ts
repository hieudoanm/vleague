import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { axiosGet, logger } from 'shared';
import { SERVER_API, API_KEY_VLEAGUE } from '../../../configs';
import { Tier } from '../../types';
import { Team } from '../types';

export const getTeam = async (teamId: string): Promise<Team> => {
  const url = `${SERVER_API}/team?teamId=${teamId}`;
  logger.info({ url }, 'getTeam() url');
  const { team } = await axiosGet<{ team: Team }>(url, {
    headers: { 'X-API-KEY': API_KEY_VLEAGUE },
  });
  return team;
};

export const getTeams = async ({
  tier,
  season,
}: {
  tier?: Tier;
  season?: number;
}): Promise<Team[]> => {
  const urlSearchParams = new URLSearchParams();
  if (!isNil(tier)) urlSearchParams.set('tier', tier);
  if (!isNil(season)) urlSearchParams.set('season', season.toString());
  const url = `${SERVER_API}/teams?${urlSearchParams.toString()}`;
  logger.info({ url }, `getTeams() url`);
  const response = await axiosGet(url, {
    headers: { 'X-API-KEY': API_KEY_VLEAGUE },
  });
  return get(response, 'data', []);
};
