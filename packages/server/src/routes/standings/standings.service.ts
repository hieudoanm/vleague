import { Season, StandingEntity, Tier } from 'shared';
import { getRepository } from '../../libs/postgre';

export const getStandings = async ({
  tier = Tier.TIER_ONE,
  season = Season.SEASON_CURRENT,
}: {
  tier: Tier;
  season: Season;
}): Promise<StandingEntity[]> => {
  const repository = await getRepository(StandingEntity);
  const standings = await repository.find({
    where: { competitionTier: tier, season },
  });
  return standings;
};

export const getStanding = async ({
  tier = Tier.TIER_ONE,
  season = Season.SEASON_CURRENT,
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
