import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

// Entites
import { User } from '../../users/entities/user.entity';

@Entity('personas')
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn({ unsigned: true, type: 'int', name: 'id' })
  idPerson: number;

  @Column({ name: 'direccion', type: 'varchar', length: 250, nullable: false })
  address: string;

  @Column({ name: 'telefono', type: 'varchar', length: 250, nullable: false })
  telephone: string;

  @Column({ name: 'fec_nacimiento', type: 'date', nullable: false })
  birthDay: string;

  @OneToOne(() => User, (user) => user.person) // specify inverse side as a second parameter
  user: User;
}
