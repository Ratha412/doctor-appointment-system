import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Doctor } from './doctor.entity';
import { Patient } from './patient.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  phone: string;

  @Column()
  createdAt: Date;

  @OneToOne(() => Doctor, doctor => doctor.user)
  doctor: Doctor;

  @OneToOne(() => Patient, patient => patient.user)
  patient: Patient;
}