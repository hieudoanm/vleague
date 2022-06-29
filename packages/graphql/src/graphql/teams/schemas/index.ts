import { gql } from 'apollo-server-express';

export const schemas = gql`
  extend type Query {
    team(teamId: String!): Team
    teams(tier: String, season: Int): [Team]
  }

  type Team {
    teamId: String
    name: String
    fullName: String
    stadium: String
    province: String
    chairman: String
    manager: String
    founded: String
    active: Boolean
    tier: String
    standings: [Standing]
    fixtures: [Fixture]
    results: [Fixture]
    players: [Player]
  }
`;
