import { Router } from "express";
import {UsersController} from "./app/controller/UsersController"
import { BrandsController } from "./app/controller/BrandsController";
import { AuthenticateUserController } from "./app/controller/AuthenticateUserController";
import { ProductsController } from "./app/controller/ProductsController";


const router = Router();
const userController = new UsersController();
const brandController = new BrandsController();
const authControler = new AuthenticateUserController();
const productController = new ProductsController();

router.post("/createUser", userController.create);
router.post("/createBrand", brandController.create);
router.post("/login", authControler.login);
router.post("/createProduct", productController.create);

export {router};