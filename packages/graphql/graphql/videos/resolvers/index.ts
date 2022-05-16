import { getVideos } from '../services';
import { Video } from '../types';

export const resolvers = {
  Query: {
    videos: async (
      _: unknown,
      { maxResults }: { maxResults: number }
    ): Promise<Video[]> => {
      return getVideos({ maxResults });
    },
  },
};
