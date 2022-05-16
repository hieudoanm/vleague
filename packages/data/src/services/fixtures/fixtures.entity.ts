import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Tier } from '../../types';

@Entity({ schema: 'vleague', name: 'fixture' })
export class FixtureEntity {
  @PrimaryColumn({ name: 'fixture_id', unique: true })
  fixtureId: string;
  // Competition
  @Column({ name: 'competition' })
  competition: string;
  @Column({
    name: 'competition_tier',
    type: 'enum',
    enum: ['TIER_CUP', 'TIER_ONE', 'TIER_TWO'],
    default: '',
  })
  competitionTier: Tier;
  // Info
  @Column({ name: 'season' })
  season: number;
  @Column({ name: 'round' })
  round: string;
  @Column({ name: 'status' })
  status: string;
  // Time and Place
  @Column({ name: 'date' })
  date: string;
  @Column({ name: 'time' })
  time: string;
  @Column({ name: 'stadium' })
  stadium: string;
  // Home
  @Column({ name: 'home_id' })
  homeId: string;
  @Column({ name: 'home_team' })
  homeTeam: string;
  @Column({ name: 'home_score' })
  homeScore: number;
  // Away
  @Column({ name: 'away_id' })
  awayId: string;
  @Column({ name: 'away_team' })
  awayTeam: string;
  @Column({ name: 'away_score' })
  awayScore: number;
  // Note
  @Column({ name: 'note' })
  note: string;
}
