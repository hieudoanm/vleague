import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export const GET_TEAM_WITH_STANDINGS: DocumentNode = gql`
  query GET_TEAM($teamId: String!) {
    team(teamId: $teamId) {
      teamId
      name
      fullName
      stadium
      province
      chairman
      manager
      founded
      active
      tier
      standings {
        standingId
        position
        teamId
        team
        played
        points
        won
        drawn
        lost
        goals
        goalsAgainst
        goalsDifference
      }
    }
  }
`;

export const GET_TEAM_WITH_FIXTURES: DocumentNode = gql`
  query GET_TEAM($teamId: String!) {
    team(teamId: $teamId) {
      teamId
      name
      fullName
      stadium
      province
      chairman
      manager
      founded
      active
      tier
      fixtures {
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
  }
`;

export const GET_TEAM_WITH_RESULTS: DocumentNode = gql`
  query GET_TEAM($teamId: String!) {
    team(teamId: $teamId) {
      teamId
      name
      fullName
      stadium
      province
      chairman
      manager
      founded
      active
      tier
      results {
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
  }
`;

export const GET_TEAM_WITH_PLAYERS: DocumentNode = gql`
  query GET_TEAM($teamId: String!) {
    team(teamId: $teamId) {
      teamId
      name
      fullName
      stadium
      province
      chairman
      manager
      founded
      active
      tier
      players {
        playerId
        shirtNumber
        position
        fullName
        dateOfBirth
      }
    }
  }
`;
