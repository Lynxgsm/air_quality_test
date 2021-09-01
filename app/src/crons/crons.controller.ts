import { Controller, Get } from '@nestjs/common';
import { CronsService } from './crons.service';

@Controller('crons')
export class CronsController {

    constructor(private cronsService:CronsService){}

    @Get("/run")
    async runCron(){
       return this.cronsService.runCron();
    }

    @Get("/stop")
    async stopCron(){
       return this.cronsService.stopCronParis();
    }
}
