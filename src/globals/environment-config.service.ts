import { Injectable, Logger } from '@nestjs/common';
import { EnvironmentsKeys } from './environments-keys';
import * as fs from 'fs';
import {config} from "dotenv";

@Injectable()
export class EnvironmentConfigService {
  private logger: Logger = new Logger(EnvironmentConfigService.name);

  constructor() {
    if (!(EnvironmentsKeys.API in process.env)) {
      const envFilePath = `${__dirname}/../../.env`;
      const existPath = fs.existsSync(envFilePath);

      if (!existPath) {
        this.logger.error('El archivo .env no existe');
        process.exit(0);
      }

      config({ path: envFilePath });
    }
  }

  getEnv(key: string): string {
    return process.env[key];
  }
}
