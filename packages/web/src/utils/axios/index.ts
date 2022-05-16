import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import get from 'lodash/get';

export const axiosGet = <T>(
  url: string,
  configs?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, configs)
      .then((response: AxiosResponse<T>) => {
        resolve(get(response, 'data', {}) as T);
      })
      .catch((error: AxiosError) => {
        reject(get(error, 'response.data', {}));
      });
  });
};

export const axiosPost = <T, D>(
  url: string,
  data: D,
  configs?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, configs)
      .then((response: AxiosResponse<T>) => {
        resolve(get(response, 'data', {}) as T);
      })
      .catch((error: AxiosError) => {
        reject(get(error, 'response.data', {}));
      });
  });
};
