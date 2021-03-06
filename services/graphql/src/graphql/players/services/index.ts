import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { axiosGet, logger, Player } from 'shared';
import { SERVER_API, API_KEY_VLEAGUE } from '../../../configs';

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
  const url = `${SERVER_API}/players?${urlSearchParams.toString()}`;
  logger.info({ url }, 'getPlayers() url');
  const response = await axiosGet(url, {
    headers: { 'X-API-KEY': API_KEY_VLEAGUE },
  });
  return get(response, 'data', []);
};
