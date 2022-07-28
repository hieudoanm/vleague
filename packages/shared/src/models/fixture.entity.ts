import { Status, Tier } from '../types';
import { Entity, Column, PrimaryColumn } from 'typeorm';

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
    enum: [Tier.TIER_ONE, Tier.TIER_TWO, Tier.TIER_CUP],
    default: '',
  })
  competitionTier: Tier;
  // Info
  @Column({ name: 'season' })
  season: number;
  @Column({ name: 'round' })
  round: string;
  @Column({
    name: 'status',
    type: 'enum',
    enum: [Status.CANCELLED, Status.FINISHED, Status.LIVE, Status.SCHEDULED],
    default: '',
  })
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
