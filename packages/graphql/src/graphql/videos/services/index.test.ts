import axios from 'axios';
import { getVideos } from '.';

jest.mock('axios');

describe('videos service', () => {
  describe('getVideos', () => {
    it('should return videos', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
      const videos = await getVideos({});
      expect(videos).toEqual([]);
    });
  });
});
