import { getRepository } from '../../libs/postgre';
import { Tier } from '../../types';
import { StandingEntity } from './standings.entity';

export const getStandings = async ({
  competitionTier = 'TIER_ONE',
  season = new Date().getFullYear(),
}: {
  competitionTier: Tier;
  season: number;
}) => {
  const repository = await getRepository(StandingEntity);
  const standings = await repository.find({
    where: { competitionTier, season },
  });
  return standings;
};

export const getStanding = async ({
  competitionTier = 'TIER_ONE',
  season = new Date().getFullYear(),
  teamId = '',
}: {
  competitionTier: Tier;
  season: number;
  teamId: string;
}) => {
  const repository = await getRepository(StandingEntity);
  const standing = await repository.findOne({
    where: { competitionTier, season, teamId },
  });
  return standing;
};
