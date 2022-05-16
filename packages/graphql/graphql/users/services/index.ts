import get from 'lodash/get';
import isNil from 'lodash/isNil';
import { KEY_API } from '../../../configs';
import { axiosGet, axiosPost } from '../../../libs/axios';
import logger from '../../../libs/logger';
import { User } from '../types';

export const getUser = async (email: string): Promise<User> => {
  const urlSearchParams = new URLSearchParams();
  if (!isNil(email)) urlSearchParams.set('email', email);
  const url = `${KEY_API}/users?${urlSearchParams.toString()}`;
  logger.info({ url }, 'getUser() url');
  const response = await axiosGet(url);
  return get(response, 'user', {});
};

export const createUser = async (email: string): Promise<User> => {
  const url = `${KEY_API}/users`;
  logger.info({ url, email }, 'createUser() url & email');
  const response = await axiosPost<User, { email: string }>(url, { email });
  return get(response, 'user', {});
};
