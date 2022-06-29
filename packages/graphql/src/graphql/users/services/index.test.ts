import axios from 'axios';
import { getUser, createUser } from '.';

jest.mock('axios');

describe('users service', () => {
  describe('getUser', () => {
    it('should return user', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { user: {} } });
      const team = await getUser('user@example.com');
      expect(team).toEqual({});
    });
  });

  describe('createUser', () => {
    it('should return user', async () => {
      jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: { user: {} } });
      const user = await createUser('user@example.com');
      expect(user).toEqual({});
    });
  });
});
