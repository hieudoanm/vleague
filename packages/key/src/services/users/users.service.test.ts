import { getUser, createUser } from './users.service';

const findOne = jest.fn();
const save = jest.fn();

jest.mock('../../libs/postgre', () => {
  return {
    getRepository: jest.fn(() => {
      return { findOne, save };
    }),
  };
});

describe('users service', () => {
  describe('getUser', () => {
    it('should return user', async () => {
      findOne.mockResolvedValueOnce({});
      const user = await getUser('user@example.com');
      expect(user).toEqual({ user: {} });
    });
  });

  describe('createUser', () => {
    it('should return user', async () => {
      save.mockResolvedValueOnce({});
      const user = await createUser('user@example.com');
      expect(user).toEqual({ user: {} });
    });
  });
});
