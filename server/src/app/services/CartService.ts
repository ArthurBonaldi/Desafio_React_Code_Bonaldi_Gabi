import { getCustomRepository } from "typeorm";
import { CartRepositories } from "../repositories/CartRepositories";

interface ICartRequest {
    id_cart?: string;
    productInCart?: string;
}

class CartService {
    async add({ productInCart }: ICartRequest) {
        const cartRepositories = getCustomRepository(CartRepositories);
        const cart = cartRepositories.create({ productInCart });
        await cartRepositories.save(cart);
        return this.viewCart();

    }
    async viewCart() {
        const cartRepositories = getCustomRepository(CartRepositories);
        const cart = await cartRepositories.find({
            relations: ["product"]
        });
        return cart
    }
    async delete({ id_cart }: ICartRequest) {
        const cartRepositories = getCustomRepository(CartRepositories);
        await cartRepositories.delete({ id_cart });
        return this.viewCart();
    }

}

export { CartService }