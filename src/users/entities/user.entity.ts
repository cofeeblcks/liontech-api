import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

export enum UserRole {
  ADMIN = 'admin',
  TECHNICIAN = 'technician',
  CUSTOMER = 'customer',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

	@Column()
	first_name: string;

	@Column()
	last_name: string;

	@Column({ unique: true })
	identification: string;

	@Column()
	phone: string;

  @Column({ unique: true })
  email: string;

	@Column({ default: true })
  status: boolean;

  @Column()
  @Exclude()
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  role: UserRole;

  @CreateDateColumn()
  created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn({ nullable: true })
	deleted_at: Date;
}