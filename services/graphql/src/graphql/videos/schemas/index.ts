import { gql } from 'apollo-server-express';

export const schemas = gql`
  extend type Query {
    videos(maxResults: Int): [Video]
  }

  type Video {
    id: String
    title: String
    description: String
    channelId: String
    channelTitle: String
    publishedAt: String
    thumbnail: String
  }
`;
