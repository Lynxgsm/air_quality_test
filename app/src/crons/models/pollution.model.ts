import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pollution {
    @PrimaryGeneratedColumn("uuid")
    id:string;
    @Column()
    ts:String;
    @Column()
    aqius:number;
    @Column()
    mainus:string;
    @Column()
    aqicn:number;
    @Column()
    maincn:string;



    static fromJson(data){
        const pollution = new Pollution();
        pollution.ts = data["ts"];
        pollution.aqius = data["aqius"];
        pollution.mainus = data["mainus"];
        pollution.aqicn = data["aqicn"];
        pollution.maincn = data["maincn"];
        return pollution;
    }

}