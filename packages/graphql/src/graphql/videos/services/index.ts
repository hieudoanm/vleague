import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { axiosGet, logger } from 'shared';
import { SERVER_API, API_KEY_VLEAGUE } from '../../../configs';
import { Video } from '../types';

export const getVideos = async ({
  maxResults = 4,
}: {
  maxResults?: number;
}): Promise<Video[]> => {
  const urlSearchParams = new URLSearchParams();
  if (!isNil(maxResults))
    urlSearchParams.set('maxResults', maxResults.toString());
  const url = `${SERVER_API}/videos?${urlSearchParams.toString()}`;
  logger.info({ url }, 'getVideos() url');
  const response = await axiosGet(url, {
    headers: { 'X-API-KEY': API_KEY_VLEAGUE },
  });
  return get(response, 'data', []);
};
