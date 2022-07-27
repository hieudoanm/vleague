import axios from 'axios';
import { resolvers } from '.';

jest.mock('axios');

describe('videos service', () => {
  describe('getVideos', () => {
    it('should return videos', async () => {
      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { data: [] } });
      const videos = await resolvers.Query.videos(undefined, { maxResults: 4 });
      expect(videos).toEqual([]);
    });
  });
});
