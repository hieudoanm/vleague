export type Video = {
  id: string;
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  publishedAt: string;
  thumbnail: string;
};

export type Thumbnail = {
  url: string;
};

export type Item = {
  id: { videoId: string };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
    thumbnails: { high: Thumbnail; medium: Thumbnail; default: Thumbnail };
  };
};
