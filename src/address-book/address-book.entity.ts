import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class AddressBookEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  address: string;
} 

