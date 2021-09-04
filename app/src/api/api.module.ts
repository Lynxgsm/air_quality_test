import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pollution } from '../crons/models/pollution.model';


@Module({
  providers: [ApiService],
  imports:[
    HttpModule,
  ],
  controllers: [ApiController],
  exports:[ApiService]
})
export class ApiModule {}
