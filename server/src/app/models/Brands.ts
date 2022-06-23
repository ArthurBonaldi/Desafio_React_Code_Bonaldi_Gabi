import {Entity, PrimaryColumn, Column} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("brands")
class  Brands {
    @PrimaryColumn()
    readonly id_brand:string;

    @Column()
    name:string;

    @Column()
    logo:string;

    constructor(){
        if(!this.id_brand){
            this.id_brand = uuid();
        }
    }

}

export {Brands}