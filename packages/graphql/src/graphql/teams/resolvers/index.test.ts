import axios from 'axios';
import { Tier } from 'shared';
import { resolvers } from '.';

jest.mock('axios');

describe('teams service', () => {
  describe('getTeam', () => {
    it('should return team', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { team: {} } });
      const team = await resolvers.Query.team(undefined, { teamId: 'teamId' });
      expect(team).toEqual({});
    });
  });

  describe('getTeams', () => {
    it('should return teams', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
      const teams = await resolvers.Query.teams(undefined, {
        tier: Tier.TIER_ONE,
        season: 2022,
      });
      expect(teams).toEqual([]);
    });
  });
});
