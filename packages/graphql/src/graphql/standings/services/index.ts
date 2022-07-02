import isNil from 'lodash/isNil';
import { axiosGet, logger, Season, Standing, Tier } from 'shared';
import { SERVER_API, API_KEY_VLEAGUE } from '../../../configs';

export const getStandings = async ({
  season = Season.SEASON_CURRENT,
  teamId,
  tier,
}: {
  season?: Season;
  teamId?: string;
  tier?: Tier;
}): Promise<Standing[]> => {
  const urlSearchParams = new URLSearchParams();
  if (!isNil(tier)) urlSearchParams.set('tier', tier);
  if (!isNil(teamId)) urlSearchParams.set('teamId', teamId);
  if (!isNil(season)) urlSearchParams.set('season', season.toString());
  const url = `${SERVER_API}/standings?${urlSearchParams.toString()}`;
  logger.info({ url }, 'getStandings() url');
  const response = await axiosGet<{ data: Standing[] }>(url, {
    headers: { 'X-API-KEY': API_KEY_VLEAGUE },
  });
  return response.data;
};
