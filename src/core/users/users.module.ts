import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Repositories
import { UsersRepository } from './repositories/users.repository';

// Modules
import { PersonModule } from '../person/person.module';

// Services
import { UsersService } from './users.service';

// Controlers
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository]), PersonModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule {}
