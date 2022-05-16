import { getUser, createUser } from '../services';
import { User } from '../types';

export const resolvers = {
  Query: {
    user: async (_: unknown, { email }: { email: string }): Promise<User> => {
      return getUser(email);
    },
  },
  Mutation: {
    user: async (_: unknown, { email }: { email: string }): Promise<User> => {
      return createUser(email);
    },
  },
};
