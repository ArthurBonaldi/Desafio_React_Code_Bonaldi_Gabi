import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {compare} from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest{
    email:string;
    password:string;
}

class AuthenticateUserService{
    async login({email, password}: IAuthenticateRequest){
        const userRepositories = getCustomRepository(UsersRepositories);

        const user = await userRepositories.findOne({email})
        if(!user){
            throw new Error("Email/Password Incorrect");
        }
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password Incorrect");
        }

        const token = sign({
            email:user.email
        },"399b121a12a454eb14c8fe445d2a9a54",
        {
            subject:user.id,
            expiresIn:"1d"
        }
        )

        return token;


    }
}

export {AuthenticateUserService}