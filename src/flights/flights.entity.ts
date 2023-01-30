import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flights {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 20 })
  origin: string;

  @Column('varchar', { length: 20 })
  destination: string;

  @Column('int')
  flightNumber: number;

  @Column('timestamp with time zone')
  depart: Date;

  @Column('timestamp with time zone')
  arrive: Date;

  @Column('boolean')
  nonstop: boolean;
}
