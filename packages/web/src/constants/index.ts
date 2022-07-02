import range from 'lodash/range';
import { Tier } from 'shared';

export const CURRENT_SEASON: number = new Date().getFullYear();
export const SEASONS: number[] = range(2012, CURRENT_SEASON + 1).reverse();

export const CURRENT_TIER: Tier = Tier.TIER_ONE;
export const TIERS: Tier[] = [Tier.TIER_ONE, Tier.TIER_TWO, Tier.TIER_CUP];

export const COMPETITION_OPTIONS: { value: Tier; key: string }[] = [
  { value: Tier.TIER_ONE, key: 'vleague1' },
  { value: Tier.TIER_TWO, key: 'vleague2' },
  { value: Tier.TIER_CUP, key: 'nationalCup' },
];
