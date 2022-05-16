import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'vleague', name: 'user' })
export class UserEntity {
  @PrimaryColumn({ name: 'email', unique: true, nullable: false })
  email: string;
  @Column({ name: 'key', unique: true, nullable: false })
  key: string;
}
