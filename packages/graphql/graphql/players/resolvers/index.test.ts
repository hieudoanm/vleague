import axios from 'axios';
import { resolvers } from '.';

jest.mock('axios');

describe('players resolvers', () => {
  describe('Query', () => {
    describe('getPlayers', () => {
      it('should return players', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
        const players = await resolvers.Query.players(undefined, {
          teamId: 'teamId',
        });
        expect(players).toEqual([]);
      });
    });
  });

  describe('Team', () => {
    describe('getPlayers', () => {
      it('should return players', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
        const players = await resolvers.Team.players({ teamId: 'teamId' });
        expect(players).toEqual([]);
      });
    });
  });
});
