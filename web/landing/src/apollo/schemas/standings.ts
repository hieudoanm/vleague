import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export const GET_STANDINGS: DocumentNode = gql`
  query GET_STANDINGS($season: Int, $teamId: String, $tier: String) {
    standings(season: $season, teamId: $teamId, tier: $tier) {
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
`;
