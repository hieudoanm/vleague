import range from 'lodash/range';
import { Tier } from '../types';

export const CURRENT_SEASON: number = new Date().getFullYear();
export const SEASONS: number[] = range(2012, CURRENT_SEASON + 1).reverse();

export const CURRENT_TIER: Tier = 'TIER_ONE';
export const TIERS: Tier[] = ['TIER_ONE', 'TIER_TWO', 'TIER_CUP'];

export const COMPETITION_OPTIONS: { value: Tier; key: string }[] = [
  { value: 'TIER_ONE', key: 'vleague1' },
  { value: 'TIER_TWO', key: 'vleague2' },
  { value: 'TIER_CUP', key: 'nationalCup' },
];

export const CDN_IMAGE_URL =
  'https://raw.githubusercontent.com/hieudoanm/v.league-public/master/images';
