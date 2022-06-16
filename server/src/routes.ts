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


//Brand routes-----------------------------------------------
router.post("/createBrand", brandController.create);
router.get("/viewBrand/:id_brand", brandController.view);
router.get("/deleteBrand/:id_brand", brandController.delete);
router.post("/updateBrand/:id_brand", brandController.update);
//-----------------------------------------------------------

//Products Routes -------------------------------------------
router.post("/createProduct", productController.create);
router.get("/viewProduct/:id", productController.view);
router.get("/deleteProduct/:id", productController.delete);
router.post("/updateProduct/:id", productController.update);

//-----------------------------------------------------------
export {router};
router.post("/createUser", userController.create);
router.post("/login", authControler.login);