import axios from 'axios';
import { getStandings } from '.';

jest.mock('axios');

describe('standings service', () => {
  describe('getStandings', () => {
    it('should return standings', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
      const standings = await getStandings({});
      expect(standings).toEqual([]);
    });
  });
});
