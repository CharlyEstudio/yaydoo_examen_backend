import { define, factory } from 'typeorm-seeding';
import * as Faker from 'faker';

// Entities
import { Person } from '../../core/person/entities/person.entity';

define(Person, (faker: typeof Faker) => {
  const person = new Person();
  person.telephone = faker.phone.phoneNumber();
  person.address = faker.random.word();
  person.birthDay = faker.date.past(10);
  return person;
});
