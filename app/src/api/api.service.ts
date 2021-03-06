import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { Pollution } from '../crons/models/pollution.model';

@Injectable()
export class ApiService {
    constructor(private httpService:HttpService){}


        async getData(lat:number, long:number){
            const response = await firstValueFrom(this.httpService.get(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${long}&key=${process.env.API_KEY}`));
            const {pollution} = response.data.data.current;
            return {
                "result":{
                    "pollution": pollution
                }
            };
        }



       

}
