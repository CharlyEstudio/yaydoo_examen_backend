import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

// Constants
import { jwtConstants } from './constants/constants';

// Modules
import { UsersModule } from '../core/users/users.module';

// Strategies
import { LocalStrategy } from './estrategies/local.strategy';
import { JwtStrategy } from './estrategies/jwt.strategy';

// Services
import { AuthService } from './auth.service';

// Controllers
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
