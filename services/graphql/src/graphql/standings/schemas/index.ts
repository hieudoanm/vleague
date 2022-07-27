import { gql } from 'apollo-server-express';

export const schemas = gql`
  extend type Query {
    standings(season: Int, teamId: String, tier: String): [Standing]
  }

  type Standing {
    standingId: String
    position: Int
    teamId: String
    team: String
    played: Int
    points: Int
    won: Int
    drawn: Int
    lost: Int
    goals: Int
    goalsAgainst: Int
    goalsDifference: Int
  }
`;
