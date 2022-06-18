import { Request, Response } from "express";
import { CartService } from "../services/CartService";

class CartController{

    async add(request:Request, response:Response){
        const {productInCart} = request.body;
        const cartService = new CartService();
        const cart = await cartService.add({productInCart});
        return response.json(cart)
    }
    async view(request:Request, response:Response){
        const cartService = new CartService();
        const cart  = await cartService.viewCart()
        return response.json(cart);

    }
    async delete(request:Request, response:Response){
        const {id_cart} = request.params;
        const cartService = new CartService();
        const cart = await cartService.delete({id_cart});

        return response.json(cart);

    }
}

export {CartController}