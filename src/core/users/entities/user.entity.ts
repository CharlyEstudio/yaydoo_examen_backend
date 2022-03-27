import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Entities
import { Person } from '../../person/entities/person.entity';

@Entity('usuarios')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ unsigned: true, type: 'int', name: 'id' })
  idUser: number;

  @Column({ type: 'varchar', length: '100', nullable: false })
  name: string;

  @Column({ type: 'varchar', length: '250', nullable: false })
  email: string;

  @Column({ type: 'varchar', length: '100', nullable: false })
  password: string;

  @OneToOne(() => Person, (person) => person.user, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_persona' })
  person: Person;
}
