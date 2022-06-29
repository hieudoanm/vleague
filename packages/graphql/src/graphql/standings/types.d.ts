export type Standing = {
  standingId: string;
  competition: string;
  competitionTier: Tier;
  position: number;
  teamId: string;
  team: string;
  played: number;
  points: number;
  won: number;
  drawn: number;
  lost: number;
  goals: number;
  goalsAgainst: number;
  goalsDifference: number;
  yellowCards: number;
  redCards: number;
};
