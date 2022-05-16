import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { API, API_KEY_VLEAGUE } from '../../../configs';
import { axiosGet } from '../../../libs/axios';
import logger from '../../../libs/logger';
import { Tier } from '../../types';
import { Standing } from '../types';

export const getStandings = async ({
  season = new Date().getFullYear(),
  teamId,
  tier,
}: {
  season?: number;
  teamId?: string;
  tier?: Tier;
}): Promise<Standing[]> => {
  const urlSearchParams = new URLSearchParams();
  if (!isNil(tier)) urlSearchParams.set('tier', tier);
  if (!isNil(teamId)) urlSearchParams.set('teamId', teamId);
  if (!isNil(season)) urlSearchParams.set('season', season.toString());
  const url = `${API}/standings?${urlSearchParams.toString()}`;
  logger.info({ url }, 'getStandings() url');
  const response = await axiosGet(url, {
    headers: { 'X-API-KEY': API_KEY_VLEAGUE },
  });
  return get(response, 'data', []);
};
