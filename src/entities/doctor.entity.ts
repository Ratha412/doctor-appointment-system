import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Doctor {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  specialization: string;

  @Column()
  experience: number;

  @Column()
  profile_image: string;

  @Column()
  email: string;

  @Column()
  about: string;

  @Column()
  clinic_address: string;

  @Column()
  status: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}