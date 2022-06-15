import { Repository, EntityRepository } from "typeorm";
import { Products } from "../models/Products";

@EntityRepository(Products)
class ProductsRepositories extends Repository<Products>{}

export{ProductsRepositories}