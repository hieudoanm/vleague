import axios from 'axios';
import { getTeam, getTeams } from '.';

jest.mock('axios');

describe('teams service', () => {
  describe('getTeam', () => {
    it('should return team', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { team: {} } });
      const team = await getTeam('teamId');
      expect(team).toEqual({});
    });
  });

  describe('getTeams', () => {
    it('should return teams', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
      const teams = await getTeams({});
      expect(teams).toEqual([]);
    });
  });
});
