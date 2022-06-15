import { Request, Response } from "express";
import { UserService } from "../services/UsersServices";
import { getCustomRepository} from "typeorm"

class UsersController{
    async create (request:Request, response: Response){
        const {name, email, password} = request.body;

        const createUserService = new UserService();
        const user =  await createUserService.create({name, email, password});
        return response.json(user);
    }
}

export {UsersController}