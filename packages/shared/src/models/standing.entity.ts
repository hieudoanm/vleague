import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Tier } from '../types';

@Entity({ schema: 'vleague', name: 'standing' })
export class StandingEntity {
  // Team
  @PrimaryColumn({ name: 'standing_id', unique: true })
  standingId: string;
  // Competition
  @Column({ name: 'competition' })
  competition: string;
  @Column({
    name: 'competition_tier',
    type: 'enum',
    enum: [Tier.TIER_ONE, Tier.TIER_TWO, Tier.TIER_CUP],
    default: '',
  })
  competitionTier: string;
  // Position
  @Column({ name: 'season' })
  season: number;
  @Column({ name: 'position' })
  position: number;
  // Team
  @Column({ name: 'team_id' })
  teamId: string;
  @Column({ name: 'team' })
  team: string;
  // Points
  @Column({ name: 'played' })
  played: number;
  @Column({ name: 'points' })
  points: number;
  // Results
  @Column({ name: 'won' })
  won: number;
  @Column({ name: 'drawn' })
  drawn: number;
  @Column({ name: 'lost' })
  lost: number;
  // Goals
  @Column({ name: 'goals' })
  goals: number;
  @Column({ name: 'goals_against' })
  goalsAgainst: number;
  @Column({ name: 'goals_difference' })
  goalsDifference: number;
  // Cards
  @Column({ name: 'yellow_cards' })
  yellowCards: number;
  @Column({ name: 'red_cards' })
  redCards: number;
  // Note
  @Column({ name: 'note' })
  note: string;
}
