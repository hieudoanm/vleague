import { gql } from 'apollo-server-express';

export const schemas = gql`
  extend type Query {
    user(email: String!): User
  }

  extend type Mutation {
    user(email: String!): User
  }

  type User {
    email: String
    key: String
  }
`;
