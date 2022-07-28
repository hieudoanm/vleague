import axios from 'axios';
import { getPlayers } from '.';

jest.mock('axios');

describe('players service', () => {
  describe('getPlayers', () => {
    it('should return players', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
      const players = await getPlayers({ teamId: 'teamId' });
      expect(players).toEqual([]);
    });
  });
});
