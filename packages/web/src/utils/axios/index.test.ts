import axios from 'axios';
import { axiosGet, axiosPost } from './index';

jest.mock('axios');

describe('axios', () => {
  describe('get', () => {
    it('success', async () => {
      jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await axiosGet('https://example.com');
      expect(data).toEqual({ status: 'success' });
    });
  });

  describe('post', () => {
    it('success', async () => {
      jest
        .spyOn(axios, 'post')
        .mockResolvedValueOnce({ data: { status: 'success' } });
      const data = await axiosPost('https://example.com', { foo: 'bar' });
      expect(data).toEqual({ status: 'success' });
    });
  });
});
