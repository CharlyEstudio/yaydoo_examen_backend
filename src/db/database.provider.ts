import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

// Environments
import { EnvironmentConfigService } from '../globals/environment-config.service';
import { EnvironmentsKeys } from '../globals/environments-keys';

// Modules
import { DatabaseConfigModule } from './database-config.module';

export const databaseProvider = [
  TypeOrmModule.forRootAsync({
    imports: [DatabaseConfigModule],
    inject: [EnvironmentConfigService],
    async useFactory(config: EnvironmentConfigService) {
      return {
        trace: true,
        logging: config.getEnv(EnvironmentsKeys.TYPEORM_LOGGING) === 'true',
        type: config.getEnv(EnvironmentsKeys.TYPEORM_CONNECTION),
        host: config.getEnv(EnvironmentsKeys.HOST),
        port: Number(config.getEnv(EnvironmentsKeys.DATABASE_PORT)),
        database: config.getEnv(EnvironmentsKeys.DATABASE_NAME),
        username: config.getEnv(EnvironmentsKeys.DATABASE_USER),
        password: config.getEnv(EnvironmentsKeys.DATABASE_PASSWORD),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        synchronize:
          config.getEnv(EnvironmentsKeys.TYPEORM_SYNCHRONIZE) === 'true',
        keeConnectionAlive:
          config.getEnv(EnvironmentsKeys.DATABASE_KEEP_CONNECTION_ALIVE) ===
          'true',
      } as ConnectionOptions;
    },
  }),
];
