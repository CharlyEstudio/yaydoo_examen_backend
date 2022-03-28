import { define, factory } from 'typeorm-seeding';
import * as Faker from 'faker';

// BCrypt JS
import * as bcrypt from 'bcryptjs';

// Entities
import { User } from '../../core/users/entities/user.entity';
import { Person } from '../../core/person/entities/person.entity';

define(User, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);

  const user = new User();

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync('12345', salt);
  user.name = `${firstName} ${lastName}`;
  user.email = faker.internet.email(user.name);
  user.person = factory(Person)() as any;
  user.password = hash;
  return user;
});
