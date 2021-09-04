import { Test } from "@nestjs/testing";
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";
import { ApiService } from "../api/api.service";
import { getRepository, Repository } from "typeorm";
import { Pollution } from "./models/pollution.model";
import { HttpModule } from "@nestjs/axios";
import { CronsService } from "./crons.service";

export class MockPollutionRepository{
    async save():Promise<Pollution>{
        return new Pollution();
    }
}

describe("CronsService",()=>{
    let apiService:ApiService;
    let cronsService:CronsService;
    let pollutionRepository:MockPollutionRepository


    beforeEach(async()=>{
        const module = await Test.createTestingModule({
            providers:[
                ApiService,
                {
                    provide:getRepositoryToken(Pollution),
                    useValue: MockPollutionRepository
                }
            ],
            imports:[HttpModule]
        }).compile();

        apiService = module.get<ApiService>(ApiService);
        pollutionRepository = module.get(getRepositoryToken(Pollution));

    })


    describe("Save data",()=>{
        it('call pollutionRepository.save and return data after saved',async() =>{
            
            const resultRun = "Cron running every minute...";
            const pollutionResult = new Pollution();
            pollutionResult.ts = '2021-08-31T12:00:00.000Z';
            pollutionResult.aqius = 66;
            pollutionResult.mainus = 'p2',
            pollutionResult.aqicn = 28;
            pollutionResult.maincn = "p2",
            pollutionResult.id = '3d40fad2-5914-4136-9c20-6f479afff938';

            const pollutionSpySave = jest.spyOn(pollutionRepository, 'save').mockResolvedValue(pollutionResult);


            expect(pollutionSpySave).toBeCalledWith(pollutionResult);
        })


    })

});