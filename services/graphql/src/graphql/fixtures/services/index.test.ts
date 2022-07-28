import axios from 'axios';
import { FixtureSortBy } from 'shared';
import { getFixture, getFixtures } from '.';

jest.mock('axios');

describe('fixtures service', () => {
  describe('getFixtures', () => {
    it('should return fixtures', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
      const fixtures = await getFixtures({
        limit: 50,
        sortBy: FixtureSortBy.DATE,
      });
      expect(fixtures).toEqual([]);
    });
  });

  describe('getFixture', () => {
    it('should return fixture', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({
        data: { fixture: {}, head2head: [], homeForm: [], awayForm: [] },
      });
      const fixture = await getFixture('id');
      expect(fixture).toEqual({
        fixture: {},
        head2head: [],
        homeForm: [],
        awayForm: [],
      });
    });
  });
});
