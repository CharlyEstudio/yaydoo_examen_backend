import { Module } from '@nestjs/common';

// Providers
import { databaseProvider } from './database.provider';

@Module({
  imports: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
