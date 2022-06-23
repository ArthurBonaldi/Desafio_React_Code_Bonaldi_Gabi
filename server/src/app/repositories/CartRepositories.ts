import { EntityRepository, Repository } from "typeorm"; 
import { Cart } from "../models/Cart";

@EntityRepository(Cart)
class CartRepositories extends Repository<Cart>{}

export {CartRepositories}