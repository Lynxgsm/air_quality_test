import { HttpService } from '@nestjs/axios';
import { HttpModule, Param, Query } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { query } from 'express';
import { firstValueFrom, Observable } from 'rxjs';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
    constructor(private apiService:ApiService){}

    @Get()
    async getData(@Query("lat") lat:number, @Query("lon") lon:number){
        return this.apiService.getData(lat,lon);
    }

 

}
