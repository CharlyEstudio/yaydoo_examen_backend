import { Injectable, NotFoundException } from '@nestjs/common';

// Repositories
import { PersonRepository } from './repositories/person.repository';

// DTO's
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {
  constructor(private readonly personRepository: PersonRepository) {}

  async create(createPersonDto: CreatePersonDto): Promise<CreatePersonDto> {
    return this.personRepository.save(createPersonDto);
  }

  async findAll(): Promise<CreatePersonDto[]> {
    return this.personRepository.find();
  }

  async findOne(id: number): Promise<CreatePersonDto> {
    return this.personRepository.findOne(id);
  }

  async update(
    id: number,
    updatePersonDto: UpdatePersonDto,
  ): Promise<UpdatePersonDto> {
    const personDB: CreatePersonDto = await this.findOne(id);

    if (!personDB) {
      throw new NotFoundException('No se encontró la persona');
    }

    personDB.address = updatePersonDto.address;
    personDB.telephone = updatePersonDto.telephone;
    personDB.birthDay = updatePersonDto.birthDay;

    return await this.personRepository.save(personDB);
  }

  async remove(id: number): Promise<void> {
    await this.personRepository.delete(id);
  }
}
