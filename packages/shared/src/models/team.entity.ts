import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Tier } from '../types';

@Entity({ schema: 'vleague', name: 'team' })
export class TeamEntity {
  // Team
  @PrimaryColumn({ name: 'team_id', unique: true })
  teamId: string;
  // Name
  @Column({ name: 'name' })
  name: string;
  @Column({ name: 'full_name' })
  fullName: string;
  // Place
  @Column({ name: 'stadium' })
  stadium: string;
  @Column({ name: 'province' })
  province: string;
  // Leader
  @Column({ name: 'chairman' })
  chairman: string;
  @Column({ name: 'manager' })
  manager: string;
  // Info
  @Column({ name: 'founded' })
  founded: string;
  @Column({ name: 'active' })
  active: boolean;
  // Competition
  @Column({
    name: 'tier',
    type: 'enum',
    enum: [Tier.TIER_ONE, Tier.TIER_TWO, Tier.TIER_CUP],
    default: '',
  })
  tier: string;
}
