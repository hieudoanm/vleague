import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { DATA_API, API_KEY_VLEAGUE } from '../../../configs';
import { axiosGet } from '../../../libs/axios';
import logger from '../../../libs/logger';
import { Player } from '../types';

export const getPlayers = async ({
  limit = 50,
  skip = 0,
  teamId,
}: {
  limit?: number;
  skip?: number;
  teamId: string;
}): Promise<Player[]> => {
  const urlSearchParams = new URLSearchParams();
  if (!isNil(limit)) urlSearchParams.set('limit', limit.toString());
  if (!isNil(skip)) urlSearchParams.set('skip', skip.toString());
  if (!isNil(teamId)) urlSearchParams.set('teamId', teamId);
  const url = `${DATA_API}/players?${urlSearchParams.toString()}`;
  logger.info({ url }, 'getPlayers() url');
  const response = await axiosGet(url, {
    headers: { 'X-API-KEY': API_KEY_VLEAGUE },
  });
  return get(response, 'data', []);
};
