import { axiosGet } from 'shared';
import { Item, Video } from './videos.types';

const API_KEY_YOUTUBE_DATA_V3 = process.env.API_KEY_YOUTUBE_DATA_V3 || '';
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || '';

export const getVideos = async ({
  maxResults = 20,
}: {
  maxResults?: number;
}): Promise<Video[]> => {
  const query = new URLSearchParams();
  query.set('part', 'snippet');
  query.set('order', 'date');
  query.set('key', API_KEY_YOUTUBE_DATA_V3);
  query.set('channelId', YOUTUBE_CHANNEL_ID);
  query.set('maxResults', maxResults.toString());
  const url = `https://www.googleapis.com/youtube/v3/search?${query.toString()}`;
  const data = await axiosGet<{ items: Item[] }>(url);
  const videos = data.items.map((item: Item) => {
    const {
      id: { videoId },
      snippet: {
        publishedAt,
        channelId,
        title,
        description,
        channelTitle,
        thumbnails,
      },
    } = item;
    const thumbnail: string =
      thumbnails.high.url || thumbnails.medium.url || thumbnails.default.url;
    return {
      id: videoId,
      title,
      description,
      channelId,
      channelTitle,
      publishedAt,
      thumbnail,
    };
  });
  return videos;
};
