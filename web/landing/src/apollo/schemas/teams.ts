import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

export const GET_TEAMS: DocumentNode = gql`
  query GET_TEAMS($tier: String, $season: Int) {
    teams(tier: $tier, season: $season) {
      teamId
      name
      fullName
      stadium
      province
      chairman
      manager
      tier
    }
  }
`;
