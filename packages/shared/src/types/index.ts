export type Fixture = {
  fixtureId: string;
  competition: string;
  competitionTier: Tier;
  season: Season;
  status: Status;
  date: string;
  time: string;
  stadium: string;
  homeId: string;
  homeTeam: string;
  homeScore: number;
  awayId: string;
  awayTeam: string;
  awayScore: number;
  note: string;
};

export enum FixtureSortBy {
  ROUND = 'round',
  DATE = 'date',
}

export type Player = {
  playerId: string;
  shirtNumber: number;
  position: string;
  fullName: string;
  dateOfBirth: string;
  teamId: string;
  team: string;
};

export enum Season {
  SEASON_CURRENT = 2022,
  SEASON_2022 = 2022,
  SEASON_2021 = 2021,
  SEASON_2020 = 2020,
  SEASON_2019 = 2019,
  SEASON_2018 = 2018,
  SEASON_2017 = 2017,
  SEASON_2016 = 2016,
  SEASON_2015 = 2015,
  SEASON_2014 = 2014,
  SEASON_2013 = 2013,
  SEASON_2012 = 2012,
}

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

export enum Status {
  CANCELLED = 'CANCELLED',
  FINISHED = 'FINISHED',
  SCHEDULED = 'SCHEDULED',
  LIVE = 'LIVE',
}

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
  tier: Tier;
};

export enum Tier {
  'TIER_CUP' = 'TIER_CUP',
  'TIER_ONE' = 'TIER_ONE',
  'TIER_TWO' = 'TIER_TWO',
  'TIER_THREE' = 'TIER_THREE',
}

export type User = {
  email: string;
  key: string;
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
