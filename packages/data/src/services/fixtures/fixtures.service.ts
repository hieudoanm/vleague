import { getRepository } from '../../libs/postgre';
import { FixtureEntity } from './fixtures.entity';

export const getFixtures = async () => {
  const repository = await getRepository(FixtureEntity);
  const fixtures = await repository.find();
  return fixtures;
};

export const getFixture = async (fixtureId: string) => {
  const repository = await getRepository(FixtureEntity);
  const fixture = await repository.findOne({ where: { fixtureId } });
  return fixture;
};
