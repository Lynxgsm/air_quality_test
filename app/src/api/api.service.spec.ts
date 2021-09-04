import { HttpModule, HttpService } from "@nestjs/axios";
import { Test } from "@nestjs/testing";
import { AxiosResponse } from "axios";
import { Observable, of } from "rxjs";
import { ApiService } from "./api.service"


describe("apiService", ()=>{
    let apiService:ApiService;
    let httpService:HttpService


    beforeEach(async()=>{
        const module = await Test.createTestingModule({
            providers:[ApiService],
            imports:[HttpModule]
        }).compile();

        httpService = module.get<HttpService>(HttpService);
        apiService = module.get<ApiService>(ApiService);
    })

    describe("getData",()=>{
        it("Call getData and return json data ",async()=>{
            const lat = 35.98;
            const lon = 140.33;
            const response: AxiosResponse<any> = {
                data:{
                    status: "success",
                    data: {
                    city: "Inashiki",
                    state: "Ibaraki",
                    country: "Japan",
                    location: {
                    type: "Point",
                    coordinates: [
                    140.32356,
                    35.95633
                    ]
                    },
                    current: {
                    weather: {
                    ts: "2021-08-31T10:00:00.000Z",
                    tp: 26,
                    pr: 1014,
                    hu: 73,
                    ws: 2.09,
                    wd: 113,
                    ic: "04n"
                    },
                    pollution: {
                    ts: "2021-08-31T10:00:00.000Z",
                    aqius: 50,
                    mainus: "p2",
                    aqicn: 17,
                    maincn: "p2"
                    }
                    }
                    }
                    },
                headers: {},
                config: { url: 'http://localhost:3000/mockUrl' },
                status: 200,
                statusText: 'OK',
              };
            const mockResult = {
                    "result": {
                        "pollution": {
                            "ts": "2021-08-31T10:00:00.000Z",
                            "aqius": 50,
                            "mainus": "p2",
                            "aqicn": 17,
                            "maincn": "p2"
                            }
                    }
                };
            jest.spyOn(httpService,"get").mockImplementation(()=> of(response));
            const result = await apiService.getData(lat,lon);
            expect(result).toEqual(mockResult);


        })


    });


})