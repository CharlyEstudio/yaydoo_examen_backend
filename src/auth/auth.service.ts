import { Injectable } from '@nestjs/common';

// BCrypt JS
import * as bcrypt from 'bcryptjs';

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
    const user: CreateUserDto = await this.usersService.findByUsernameWithPass(
      email,
    );

    const validPassword = await bcrypt.compare(pass, user.password);

    if (user && validPassword) {
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
