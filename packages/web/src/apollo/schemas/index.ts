import { DocumentNode, gql } from '@apollo/client';

export { GET_FIXTURE, GET_FIXTURES } from './fixtures';
export { GET_STANDINGS } from './standings';
export {
  GET_TEAM_WITH_STANDINGS,
  GET_TEAM_WITH_FIXTURES,
  GET_TEAM_WITH_PLAYERS,
  GET_TEAM_WITH_RESULTS,
} from './team';
export { GET_TEAMS } from './teams';
export { CREATE_USER, GET_USER } from './users';

export const GET_HOME: DocumentNode = gql`
  query GET_HOME(
    $maxResults: Int
    $season: Int
    $tier: String
    $status: String
    $limit: Int
    $sortBy: String
  ) {
    videos(maxResults: $maxResults) {
      id
      title
      description
      channelId
      channelTitle
      publishedAt
      thumbnail
    }
    standings(season: $season, tier: $tier) {
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
    fixtures(
      season: $season
      tier: $tier
      status: $status
      limit: $limit
      sortBy: $sortBy
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
