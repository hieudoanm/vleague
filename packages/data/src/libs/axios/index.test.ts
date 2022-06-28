import axios from 'axios';
import { axiosGet } from './index';

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
});
