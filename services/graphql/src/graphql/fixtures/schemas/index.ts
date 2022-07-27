import { gql } from 'apollo-server-express';

export const schemas = gql`
  extend type Query {
    fixture(fixtureId: String!): FixtureById
    fixtures(
      limit: Int
      season: Int
      sortBy: String
      status: String
      teamId: String
      tier: String
    ): [Fixture]
  }

  type FixtureById {
    fixture: Fixture
    head2head: [Fixture]
    homeForm: [Fixture]
    awayForm: [Fixture]
  }

  type Fixture {
    fixtureId: String
    competition: String
    competitionTier: String
    season: String
    round: String
    status: String
    stadium: String
    date: String
    time: String
    homeId: String
    homeTeam: String
    homeScore: Int
    awayId: String
    awayTeam: String
    awayScore: Int
  }
`;
