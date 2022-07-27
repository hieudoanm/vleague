import { FixtureEntity, FixtureSortBy, Season, Status, Tier } from 'shared';
import { getRepository } from '../../libs/postgre';

export const getFixtures = async ({
  limit,
  season,
  sortBy,
  status,
  tier,
}: {
  limit: number;
  season: Season;
  sortBy: FixtureSortBy;
  status: Status;
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
