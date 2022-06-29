export type Status = 'FINISHED' | 'SCHEDULED' | 'LIVE' | 'CANCELLED';

export type Fixture = {
  fixtureId: string;
  season: string;
  round: number;
  status: string;
  stadium: string;
  date: string;
  time: string;
  homeId: string;
  homeTeam: string;
  homeScore: number;
  awayId: string;
  awayTeam: string;
  awayScore: number;
};
