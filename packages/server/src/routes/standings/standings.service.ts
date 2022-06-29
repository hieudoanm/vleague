import { getRepository } from '../../libs/postgre';
import { Tier } from '../../types';
import { StandingEntity } from './standings.entity';

export const getStandings = async ({
  tier = Tier.TIER_ONE,
  season = new Date().getFullYear(),
}: {
  tier: Tier;
  season: number;
}) => {
  const repository = await getRepository(StandingEntity);
  const standings = await repository.find({
    where: { competitionTier: tier, season },
  });
  return standings;
};

export const getStanding = async ({
  tier = Tier.TIER_ONE,
  season = new Date().getFullYear(),
  teamId = '',
}: {
  tier: Tier;
  season: number;
  teamId: string;
}) => {
  const repository = await getRepository(StandingEntity);
  const standing = await repository.findOne({
    where: { competitionTier: tier, season, teamId },
  });
  return standing;
};
