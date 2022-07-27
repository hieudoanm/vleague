import { gql } from 'apollo-server-express';

export const schemas = gql`
  extend type Query {
    players(limit: Int, skip: Int, teamId: String!): [Player]
  }

  type Player {
    playerId: String
    shirtNumber: Int
    position: String
    fullName: String
    dateOfBirth: String
    teamId: String
    team: String
  }
`;
