import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Repositories
import { PersonRepository } from './repositories/person.repository';

// Services
import { PersonService } from './person.service';

// Controllers
import { PersonController } from './person.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PersonRepository])],
  controllers: [PersonController],
  providers: [PersonService],
  exports: [TypeOrmModule, PersonService],
})
export class PersonModule {}
