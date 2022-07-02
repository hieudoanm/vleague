import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'vleague', name: 'player' })
export class PlayerEntity {
  @PrimaryColumn({ name: 'player_id', unique: true })
  playerId: string;
  // Position
  @Column({ name: 'shirt_number' })
  shirtNumber: number;
  @Column({ name: 'position' })
  position: string;
  // Info
  @Column({ name: 'full_name' })
  fullName: string;
  @Column({ name: 'date_of_birth' })
  dateOfBirth: string;
  // Team
  @Column({ name: 'team_id' })
  teamId: string;
  @Column({ name: 'team' })
  team: string;
}
