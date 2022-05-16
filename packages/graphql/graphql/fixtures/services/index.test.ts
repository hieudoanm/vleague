import axios from 'axios';
import { getFixture, getFixtures } from '.';

jest.mock('axios');

describe('fixtures service', () => {
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

  describe('getFixtures', () => {
    it('should return fixtures', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
      const fixtures = await getFixtures({});
      expect(fixtures).toEqual([]);
    });
  });
});
