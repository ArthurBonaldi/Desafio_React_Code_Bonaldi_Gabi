import {Entity, PrimaryColumn, Column} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("brands")
class Brands {
    @PrimaryColumn()
    readonly id:string;

    @Column()
    name:string;

    @Column()
    logo:string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export {Brands}