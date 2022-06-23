import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { Products } from "./Products";
import { v4 as uuid } from "uuid";

@Entity("cart")
 class Cart {

    @PrimaryColumn()
    readonly id_cart:string;

    @Column()
    productInCart:string;
    @JoinColumn({name:"productInCart"})
    @ManyToOne(()=>Products)
    product:Products;


    constructor(){
        if(!this.id_cart){
            this.id_cart = uuid();
        }

    }
}

export {Cart}
