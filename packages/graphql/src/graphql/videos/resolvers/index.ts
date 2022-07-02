import { Video } from 'shared';
import { getVideos } from '../services';

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
