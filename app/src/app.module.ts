import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApiModule } from './api/api.module';
import { CronsModule } from './crons/crons.module';

@Module({
  imports: [ 
    ApiModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "root",
      "database": "air",
      "entities": ["dist/**/*.model{.ts,.js}"],
      "synchronize": true
    }),
    ScheduleModule.forRoot(),
    CronsModule
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
