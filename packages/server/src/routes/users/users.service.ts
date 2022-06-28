import { getRepository } from '../../libs/postgre';
import { UserEntity } from './users.entity';
import { v4, v5 } from 'uuid';

const uuid = (email: string) => {
  return v5(email, v4());
};

export const getUser = async (email: string) => {
  const userRepository = await getRepository(UserEntity);
  const user: UserEntity | null = await userRepository.findOne({
    where: { email },
  });
  return { user };
};

export const createUser = async (email: string) => {
  const userRepository = await getRepository(UserEntity);
  const newUser = new UserEntity();
  newUser.email = email;
  newUser.key = uuid(email);
  const savedUser = await userRepository.save(newUser);
  return { user: savedUser };
};
