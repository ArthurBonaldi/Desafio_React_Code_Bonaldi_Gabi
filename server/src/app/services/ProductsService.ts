import { getCustomRepository, Like } from "typeorm";
import { BrandsRepositories } from "../repositories/BransdsRepositories";
import { ProductsRepositories } from "../repositories/ProductsRepositories";


interface IProductRequest{
    id?:string;
    nameProduct?:string;
    price?:number;
    brand?:string;
    image?:string;
}

class ProductsServices{
    async create({nameProduct, price, brand, image}: IProductRequest){
        const productRepository = getCustomRepository(ProductsRepositories);
        const brandRepositories = getCustomRepository(BrandsRepositories);

        const brandExist = await brandRepositories.findOne(brand)
        if(!brandExist){
            throw new Error("Marca Inexistente")
        }
        const product  = productRepository.create({
            nameProduct,
            price,
            brand,
            image
        })
        

        await productRepository.save(product);
        return product

    }
    async view({id}: IProductRequest){
        const productRepository = getCustomRepository(ProductsRepositories);
        const productExists = await productRepository.findOne(id)
        if(!productExists){
            throw new Error ("Product don't exist")
        }
        return productExists;
    }

    async delete({id}:IProductRequest){
        const productRepository = getCustomRepository(ProductsRepositories);
        const productExists = await productRepository.findOne(id);
        if(!productExists){
            throw new Error("Product don't exist");
        }
        const product = await productRepository.delete(id);

        return product;
    }
    async update({id, nameProduct, price, brand, image}: IProductRequest){
        const productRepository = getCustomRepository(ProductsRepositories);
        const brandRepositories = getCustomRepository(BrandsRepositories);

        const brandExist = brandRepositories.findOne(brand);
        if(!brandExist){
            throw new Error("Brand don't exist");
        }
         await productRepository.update({id},{nameProduct, price, brand, image})

        const product = productRepository.findOne(id);

        return product;

    }
    async showAll(){
        const productRepository = getCustomRepository(ProductsRepositories);
        const product = await productRepository.find({
            relations:["brands"]
        });
        return product;
    }
    async showByBrand({brand}:IProductRequest){
        const productRepository = getCustomRepository(ProductsRepositories);
        const product = await productRepository.find({brand});
        return product;
    }
    async search({nameProduct}: IProductRequest){
        const productRepository = getCustomRepository(ProductsRepositories);
        const product = await productRepository.find({where: {nameProduct: Like(`%${nameProduct}`)}});
        return product;
    }

}

export {ProductsServices}