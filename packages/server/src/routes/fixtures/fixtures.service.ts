import { getRepository } from '../../libs/postgre';
import { Tier } from '../../types';
import { FixtureEntity } from './fixtures.entity';

export const getFixtures = async ({
  limit,
  season,
  sortBy,
  status,
  tier,
}: {
  limit: number;
  season: number;
  sortBy: string;
  status: string;
  tier: Tier;
}) => {
  const repository = await getRepository(FixtureEntity);
  return repository.find({
    where: { season, status, competitionTier: tier },
    take: limit,
    order: { [sortBy]: 'ASC' },
  });
};

export const getFixture = async (
  fixtureId: string
): Promise<FixtureEntity | null> => {
  const repository = await getRepository(FixtureEntity);
  return repository.findOne({ where: { fixtureId } });
};
