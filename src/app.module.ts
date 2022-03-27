import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';

// Environments
import { EnvironmentConfigService } from './globals/environment-config.service';
import { EnvironmentsKeys } from './globals/environments-keys';

// Modules
import { DatabaseModule } from './db/database.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TerminusModule,
    DatabaseModule,
    AuthModule,
    CoreModule,
  ],
  controllers: [HealthController],
  providers: [EnvironmentConfigService],
})
export class AppModule {
  static api: string;
  static port: number;
  static host: string;

  constructor(private readonly envConfigService: EnvironmentConfigService) {
    AppModule.api = this.envConfigService.getEnv(EnvironmentsKeys.API);
    AppModule.port = Number(
      this.envConfigService.getEnv(EnvironmentsKeys.PORT),
    );
    AppModule.host = this.envConfigService.getEnv(EnvironmentsKeys.HOST);
  }
}
