import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUser";

class AuthenticateUserController{
    async login (request:Request, response:Response){
        const {email, password} = request.body;
        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.login({
            email,
            password
        });

        return response.json(token);
    }
}

export {AuthenticateUserController}