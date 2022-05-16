import axios from 'axios';
import { resolvers } from '.';

jest.mock('axios');

describe('standings resolvers', () => {
  describe('Query', () => {
    describe('getStandings', () => {
      it('should return standings', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
        const standings = await resolvers.Query.standings(undefined, {});
        expect(standings).toEqual([]);
      });
    });
  });

  describe('Team', () => {
    describe('getStandings', () => {
      it('should return standings', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
        const standings = await resolvers.Team.standings({
          teamId: 'teamId',
          tier: 'TIER_ONE',
        });
        expect(standings).toEqual([]);
      });
    });
  });
});
