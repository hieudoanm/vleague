import { UserEntity } from 'shared';
import { v4, v5 } from 'uuid';
import { getRepository } from '../../libs/postgre';

const uuid = (email: string) => {
  return v5(email, v4());
};

export const getUser = async (
  email: string
): Promise<{ user: UserEntity | null }> => {
  const userRepository = await getRepository(UserEntity);
  const user: UserEntity | null = await userRepository.findOne({
    where: { email },
  });
  return { user };
};

export const createUser = async (
  email: string
): Promise<{ user: UserEntity }> => {
  const userRepository = await getRepository(UserEntity);
  const newUser = new UserEntity();
  newUser.email = email;
  newUser.key = uuid(email);
  const savedUser = await userRepository.save<UserEntity>(newUser);
  return { user: savedUser };
};
