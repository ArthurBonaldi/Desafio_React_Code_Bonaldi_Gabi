import { Router } from "express";
import {UsersController} from "./app/controller/UsersController"

const router = Router();
const userController = new UsersController();



router.post("/createUser", userController.create);

export {router};