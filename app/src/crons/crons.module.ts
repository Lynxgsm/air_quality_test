import { Module } from '@nestjs/common';
import { CronsService } from './crons.service';
import { CronsController } from './crons.controller';
import { Pollution } from './models/pollution.model'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiModule } from '../api/api.module';
import { ApiService } from '../api/api.service';


@Module({
  providers: [CronsService],
  controllers: [CronsController],
  imports:[
    TypeOrmModule.forFeature([Pollution]),
    ApiModule
  ]
})
export class CronsModule {}
