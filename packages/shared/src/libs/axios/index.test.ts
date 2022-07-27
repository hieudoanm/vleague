import axios from 'axios';
import { axiosGet, axiosPost } from './index';

jest.mock('axios');

describe('axios', () => {
  const url = 'https://example.com';
  const postData = { foo: 'bar' };

  describe('get', () => {
    it('success', async () => {
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await axiosGet(url);
      expect(data).toEqual({ status: 'success' });
    });

    it('should return error', async () => {
      jest
        .spyOn(axios, 'get')
        .mockRejectedValueOnce({ response: { data: { status: 'error' } } });
      try {
        await axiosGet(url);
      } catch (error) {
        expect(error).toEqual({ status: 'error' });
      }
    });

    it('should return undefined', async () => {
      jest
        .spyOn(axios, 'get')
        .mockRejectedValueOnce({ data: { status: 'error' } });
      try {
        await axiosGet(url);
      } catch (error) {
        expect(error).toEqual(undefined);
      }
    });
  });

  describe('post', () => {
    it('success', async () => {
      jest
        .spyOn(axios, 'post')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await axiosPost(url, postData);
      expect(data).toEqual({ status: 'success' });
    });

    it('should return error', async () => {
      jest
        .spyOn(axios, 'post')
        .mockRejectedValueOnce({ response: { data: { status: 'error' } } });
      try {
        await axiosPost(url, postData);
      } catch (error) {
        expect(error).toEqual({ status: 'error' });
      }
    });

    it('should return undefined', async () => {
      jest
        .spyOn(axios, 'post')
        .mockRejectedValueOnce({ data: { status: 'error' } });
      try {
        await axiosPost(url, postData);
      } catch (error) {
        expect(error).toEqual(undefined);
      }
    });
  });
});
