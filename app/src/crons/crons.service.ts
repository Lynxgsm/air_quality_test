import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiService } from 'src/api/api.service';
import { Pollution } from 'src/crons/models/pollution.model';
import { Repository } from 'typeorm';


@Injectable()
export class CronsService {


    constructor(
        @InjectRepository(Pollution)
        private pollutionRepository:Repository<Pollution>,
        private schedulerRegistry: SchedulerRegistry,
        private apiService:ApiService
    ){}



    @Cron(
        CronExpression.EVERY_MINUTE,
        {name:"paris"}
        )
    async runCron(){
       const data = await this.apiService.getData(48.856613,2.352222);
       const pollution = Pollution.fromJson(data.result.pollution);
      const result =  await this.pollutionRepository.save(pollution);
       console.log("Result", result);
        return "Cron running every minute...";
    }




    async stopCronParis(){
        const job = this.schedulerRegistry.getCronJob('paris');
        job.stop();
        return "Cron Stoped";

    }

}
