import { Module } from '@nestjs/common';

// Services
import { EnvironmentConfigService } from '../globals/environment-config.service';

@Module({
  providers: [
    { provide: EnvironmentConfigService, useClass: EnvironmentConfigService }
  ],
  exports: [EnvironmentConfigService],
})
export class DatabaseConfigModule {}
