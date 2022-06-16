import {getCustomRepository} from "typeorm";
import {BrandsRepositories} from "./../repositories/BransdsRepositories";


interface IBrandRequest{
    id_brand?:string;
    name?:string;
    logo?:string;
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

    async view ({id_brand}: IBrandRequest){
        const brandRepositories = getCustomRepository(BrandsRepositories);
        const brandExists = await brandRepositories.findOne({id_brand});
        if(!brandExists){
            throw new Error ("Brand Not Found");
        }
        return brandExists;

    }

    async delete({id_brand}: IBrandRequest){
        const brandRepositories =getCustomRepository(BrandsRepositories);
        const brandExists =  await brandRepositories.findOne({id_brand});
        if(!brandExists){
            throw new Error("Brand Not Found");
        }
        const brand = await brandRepositories.delete(id_brand);

        return brand;
    }
    async update({id_brand, name, logo}:IBrandRequest){
        const brandRepositories = getCustomRepository(BrandsRepositories);
        const brandExists = await brandRepositories.findOne(id_brand);
        if(!brandExists){
            throw new Error ("Brand does not exist");
        }
        if(brandExists.name == name){
            throw new Error ("Nome Igual")
        }
        const brand = await brandRepositories.update({id_brand},{name, logo});

        const brandResult = await brandRepositories.findOne({id_brand});

        return brandResult

    }
}

export {BrandsService};