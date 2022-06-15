import {getCustomRepository} from "typeorm";
import {BrandsRepositories} from "./../repositories/BransdsRepositories";


interface IBrandRequest{
    id_brand?:string;
    name:string;
    logo:string;
}

class BrandsService{
    async create({name, logo}: IBrandRequest){
        const brandRepositories = getCustomRepository(BrandsRepositories);
        if(!name){
            throw new Error("Name Incorrect");
        }
        if(!logo){
            throw new Error("Logo Incorrect");
        }
        const logoNameAlredyExist =  await brandRepositories.findOne({name});
        
        if(logoNameAlredyExist){
            throw new Error("Name Already Exists")
        }

        const brand = brandRepositories.create({
            name,
            logo
        })

        await brandRepositories.save(brand);
        return brand;

    }
}

export {BrandsService};