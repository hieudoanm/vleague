import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import get from 'lodash/get';

export const axiosGet = <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, config)
      .then((response: AxiosResponse) => {
        const responseData = get(response, 'data', {});
        resolve(responseData);
      })
      .catch((error: AxiosError) => {
        const errorData = get(error, 'response.data');
        reject(errorData);
      });
  });
};

export const axiosPost = <T, D>(
  url: string,
  data: D,
  config?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .post<D>(url, data, config)
      .then((response: AxiosResponse) => {
        const responseData = get(response, 'data', {});
        resolve(responseData);
      })
      .catch((error: AxiosError) => {
        const errorData = get(error, 'response.data');
        reject(errorData);
      });
  });
};
