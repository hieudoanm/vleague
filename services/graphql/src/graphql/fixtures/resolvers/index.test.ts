import axios from 'axios';
import { resolvers } from '.';

jest.mock('axios');

describe('fixtures resolvers', () => {
  describe('Query', () => {
    describe('getFixture', () => {
      it('should return fixture', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({
          data: { fixture: {}, head2head: [], homeForm: [], awayForm: [] },
        });
        const fixture = await resolvers.Query.fixture(undefined, {
          fixtureId: 'fixtureId',
        });
        expect(fixture).toEqual({
          fixture: {},
          head2head: [],
          homeForm: [],
          awayForm: [],
        });
      });
    });

    describe('getFixtures', () => {
      it('should return fixtures', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
        const fixtures = await resolvers.Query.fixtures(undefined, {});
        expect(fixtures).toEqual([]);
      });
    });
  });

  describe('Team', () => {
    describe('getFixtures', () => {
      it('should return fixtures', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
        const fixtures = await resolvers.Team.fixtures({ teamId: 'teamId' });
        expect(fixtures).toEqual([]);
      });
    });

    describe('getResults', () => {
      it('should return results', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
        const results = await resolvers.Team.results({ teamId: 'teamId' });
        expect(results).toEqual([]);
      });
    });
  });
});
