import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export const GET_FIXTURE: DocumentNode = gql`
  query GET_FIXTURE($fixtureId: String!) {
    fixture(fixtureId: $fixtureId) {
      fixture {
        fixtureId
        season
        round
        status
        stadium
        date
        time
        homeId
        homeTeam
        homeScore
        awayScore
        awayId
        awayTeam
      }
      head2head {
        fixtureId
        season
        round
        status
        stadium
        date
        time
        homeId
        homeTeam
        homeScore
        awayScore
        awayId
        awayTeam
      }
      homeForm {
        fixtureId
        season
        round
        status
        stadium
        date
        time
        homeId
        homeTeam
        homeScore
        awayScore
        awayId
        awayTeam
      }
      awayForm {
        fixtureId
        season
        round
        status
        stadium
        date
        time
        homeId
        homeTeam
        homeScore
        awayScore
        awayId
        awayTeam
      }
    }
  }
`;

export const GET_FIXTURES: DocumentNode = gql`
  query GET_FIXTURES(
    $limit: Int
    $season: Int
    $sortBy: String
    $status: String
    $teamId: String
    $tier: String
  ) {
    fixtures(
      limit: $limit
      season: $season
      sortBy: $sortBy
      status: $status
      teamId: $teamId
      tier: $tier
    ) {
      fixtureId
      season
      round
      status
      stadium
      date
      time
      homeId
      homeTeam
      homeScore
      awayId
      awayTeam
      awayScore
    }
  }
`;
