import { Request, Response } from "express";
import { ProductsServices } from "../services/ProductsService";


class ProductsController {
    async create(request:Request, response:Response){
        const {nameProduct, price, brand, image} = request.body; 
        const createProduct = new ProductsServices();
        const product = await createProduct.create({
            nameProduct,
            price,
            brand,
            image
        })

        return response.json(product);
    }

}

export {ProductsController}