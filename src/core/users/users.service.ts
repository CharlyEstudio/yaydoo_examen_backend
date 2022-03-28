import { Injectable, NotFoundException } from '@nestjs/common';

// BCrypt JS
import * as bcrypt from 'bcryptjs';

// DTO's
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// Repositories
import { UsersRepository } from './repositories/users.repository';

// Services
import { PersonService } from '../person/person.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly personService: PersonService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const person = await this.personService.create(createUserDto.person);

    if (!person) {
      throw new Error('No se pudo crear la persona del usuario');
    }

    const salt = await bcrypt.genSaltSync(7);
    createUserDto.password = await bcrypt.hashSync(
      createUserDto.password,
      salt,
    );
    createUserDto.person = person;
    return this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<CreateUserDto[]> {
    return this.userRepository.find({ relations: ['person'] });
  }

  async findOne(id: number): Promise<CreateUserDto> {
    return this.userRepository.findOne(id, { relations: ['person'] });
  }

  async findByUsername(email: string): Promise<CreateUserDto> {
    return await this.userRepository.findOne({
      where: { email },
      relations: ['person'],
    });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    const userDB = await this.findOne(id);

    if (!userDB) {
      return new NotFoundException('No se encontro el usuario');
    }

    userDB.name = updateUserDto.name;
    userDB.email = updateUserDto.name;

    return await this.userRepository.save(userDB);
  }

  async remove(id: number): Promise<void> {
    const userDB = await this.findOne(id);
    if (!userDB) {
      throw new Error('No se encontró el usuario.');
    }

    await this.userRepository.delete(id);
    await this.personService.remove(userDB.person.idPerson);
  }
}
