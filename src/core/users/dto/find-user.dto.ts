import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

// DTO's
import { CreatePersonDto } from '../../person/dto/create-person.dto';

export class FindUserDto {
  @ApiProperty()
  idUser: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  person: CreatePersonDto;
}
