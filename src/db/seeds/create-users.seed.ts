import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

// Entities
import { User } from '../../core/users/entities/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(User)().createMany(100);
  }
}
