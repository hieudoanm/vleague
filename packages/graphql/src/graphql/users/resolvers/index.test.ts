import axios from 'axios';
import { resolvers } from '.';

jest.mock('axios');

describe('users service', () => {
  describe('getUser', () => {
    it('should return user', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { user: {} } });
      const team = await resolvers.Query.user(undefined, {
        email: 'user@example.com',
      });
      expect(team).toEqual({});
    });
  });

  describe('createUser', () => {
    it('should return user', async () => {
      jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: { user: {} } });
      const user = await resolvers.Mutation.user(undefined, {
        email: 'user@example.com',
      });
      expect(user).toEqual({});
    });
  });
});
