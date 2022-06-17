import { Request, Response } from "express";
import { ProductsServices } from "../services/ProductsService";


class ProductsController {
    async create(request:Request, response:Response){
        const {nameProduct, price, brand, image} = request.body; 
        const productService = new ProductsServices();
        const product = await productService.create({
            nameProduct,
            price,
            brand,
            image
        })

        return response.json(product);
    }
    async view(request:Request, response:Response){
        const {id} = request.params;
        const productService =  new ProductsServices();
        const product = await productService.view({id});
        return response.json(product);
    }
    async delete (request:Request, response:Response){
        const {id} = request.params;
        const productService = new ProductsServices();
        const product = await productService.delete({id});
        return response.json(product);
    }
    async update (request:Request, responde:Response){
        const {id} = request.params;
        const {nameProduct, price, brand, image} = request.body;
        const productService = new ProductsServices();
        const product = await productService.update({id, nameProduct, price, brand, image});
        return responde.json(product)
    }
    async showAll(request:Request, response:Response){
        const productService = new ProductsServices();
        const product = await productService.showAll();
        return response.json(product);
    }
    async showByBrand(request:Request, response:Response){
        const {brand} = request.params;
        const productService = new ProductsServices();
        const product = await productService.showByBrand({brand});
        return response.json(product);
    } 
    async search(request:Request, response:Response){
        const {nameProduct} = request.params;
        const productService = new ProductsServices();
        const product = await productService.search({nameProduct});
        return response.json(product);
    }

}

export {ProductsController}