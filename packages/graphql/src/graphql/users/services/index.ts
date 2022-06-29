import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { axiosGet, axiosPost, logger } from 'shared';
import { SERVER_API } from '../../../configs';
import { User } from '../types';

export const getUser = async (email: string): Promise<User> => {
  const urlSearchParams = new URLSearchParams();
  if (!isNil(email)) urlSearchParams.set('email', email);
  const url = `${SERVER_API}/users?${urlSearchParams.toString()}`;
  logger.info({ url }, 'getUser() url');
  const response = await axiosGet(url);
  return get(response, 'user', {});
};

export const createUser = async (email: string): Promise<User> => {
  const url = `${SERVER_API}/users`;
  logger.info({ url, email }, 'createUser() url & email');
  const response = await axiosPost<User, { email: string }>(url, { email });
  return get(response, 'user', {});
};
