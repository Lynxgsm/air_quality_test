import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CronsService } from './crons.service';

@Controller('crons')
export class CronsController {

    constructor(private cronsService:CronsService){}

    @Get("/run")
    @ApiOperation({ summary: 'the cron is launched when the application start , but you can use this after stopping' })
    async runCron(){
       return this.cronsService.runCron();
    }

    @ApiOperation({ summary: 'when you want to stop the cron' })
    @Get("/stop")
    async stopCron(){
       return this.cronsService.stopCronParis();
    }
}
