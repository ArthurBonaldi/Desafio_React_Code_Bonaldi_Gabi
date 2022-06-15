import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import { v4 as uuid } from "uuid";
import { Brands } from "./Brands";


@Entity("products")
class Products{
    @PrimaryColumn()
    readonly id:string

    @Column()
    nameProduct:string;

    @Column()
    price:number;

    @Column()
    brand:string;

    @JoinColumn({name:"brand"})
    @ManyToOne(()=>Brands)
    brands:Brands

    @Column()
    image:string;

    constructor(){
        if(!this.id){
            this.id = uuid();   
        }
    }
}

export {Products}
