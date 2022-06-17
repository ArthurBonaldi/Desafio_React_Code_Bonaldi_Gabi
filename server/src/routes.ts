import { Router } from "express";
import {UsersController} from "./app/controller/UsersController"
import { BrandsController } from "./app/controller/BrandsController";
import { AuthenticateUserController } from "./app/controller/AuthenticateUserController";
import { ProductsController } from "./app/controller/ProductsController";
import { ensureAuthenticate } from "./app/middlewares/ensureAuthenticate";


const router = Router();
const userController = new UsersController();
const brandController = new BrandsController();
const authControler = new AuthenticateUserController();
const productController = new ProductsController();


//Brand routes-----------------------------------------------
router.post("/createBrand", ensureAuthenticate,brandController.create);
router.get("/viewBrand/:id_brand", brandController.view);
router.get("/deleteBrand/:id_brand", ensureAuthenticate,brandController.delete);
router.post("/updateBrand/:id_brand",ensureAuthenticate, brandController.update);
router.get("/showBrands",ensureAuthenticate, brandController.showAll);
//-----------------------------------------------------------

//Products Routes -------------------------------------------
router.post("/createProduct", ensureAuthenticate, productController.create);
router.get("/viewProduct/:id", productController.view);
router.get("/deleteProduct/:id",ensureAuthenticate, productController.delete);
router.post("/updateProduct/:id",ensureAuthenticate, productController.update);
router.get("/showProducts", productController.showAll);
router.get("/showByBrand/:brand", productController.showByBrand);
router.get("/search/:nameProduct", productController.search);
//-----------------------------------------------------------

//Users Routes ------------------------------------------------

router.post("/createUser", userController.create);
//-------------------------------------------------------------



router.post("/login", authControler.login);
export {router};