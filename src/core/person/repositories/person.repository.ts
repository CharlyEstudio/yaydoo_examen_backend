import { EntityRepository, Repository } from 'typeorm';

// Entities
import { Person } from '../entities/person.entity';

@EntityRepository(Person)
export class PersonRepository extends Repository<Person> {}
