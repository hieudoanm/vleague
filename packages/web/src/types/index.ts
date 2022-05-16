export type Tier = 'TIER_ONE' | 'TIER_TWO' | 'TIER_CUP';

export type Team = {
  teamId: string;
  name: string;
  fullName: string;
  stadium: string;
  province: string;
  chairman: string;
  manager: string;
  founded: string;
  active: boolean;
  tier: string;
};

export type Standing = {
  standingId: string;
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

export type Fixture = {
  fixtureId: string;
  // Competition
  competition: string;
  competitionTier: string;
  // Season
  season: number;
  round: number;
  status: string;
  // Place and Time
  stadium: string;
  date: string;
  time: string;
  // Home
  homeId: string;
  homeTeam: string;
  homeScore: number;
  // Away
  awayId: string;
  awayTeam: string;
  awayScore: number;
};

export type Video = {
  id: string;
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  publishedAt: string;
  thumbnail: string;
};

export type Player = {
  playerId: string;
  shirtNumber: number;
  fullName: string;
  position: string;
};
