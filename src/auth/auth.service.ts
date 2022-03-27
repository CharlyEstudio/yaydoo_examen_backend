import { Injectable } from '@nestjs/common';

// DTO's
import { CreateUserDto } from '../core/users/dto/create-user.dto';

// Services
import { UsersService } from '../core/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user: CreateUserDto = await this.usersService.findByUsername(email);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: CreateUserDto): Promise<any> {
    const payload = { user };
    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }
}
