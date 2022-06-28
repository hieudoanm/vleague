import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const axiosGet = <T>(
  url: string,
  configs?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, configs)
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((error: AxiosError) => {
        reject(error.response?.data);
      });
  });
};
