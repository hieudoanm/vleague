import { Entity, Column, PrimaryColumn } from 'typeorm';

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
  @Column({ name: 'tier' })
  tier: string;
}
