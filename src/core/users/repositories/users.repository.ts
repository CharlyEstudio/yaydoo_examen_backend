import { EntityRepository, Repository } from 'typeorm';

// Entities
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {}
