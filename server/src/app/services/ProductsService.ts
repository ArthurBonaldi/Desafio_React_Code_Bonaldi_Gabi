import { getCustomRepository } from "typeorm";
import { BrandsRepositories } from "../repositories/BransdsRepositories";
import { ProductsRepositories } from "../repositories/ProductsRepositories";


interface IProductRequest{
    id?:string;
    nameProduct:string;
    price:number;
    brand:string;
    image:string;
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


}

export {ProductsServices}