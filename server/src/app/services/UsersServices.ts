import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {hash} from  "bcryptjs";

interface IUserRequest{
    id?:string;
    name:string;
    email:string;
    password:string;
}


class UserService{
    async create({name, email, password}: IUserRequest){
        const userRepository = getCustomRepository(UsersRepositories);
        if (email){
            const userExistis = await userRepository.findOne({email})
            if(!userExistis){
                const passwordHash = await hash(password, 8)
                const user = userRepository.create({
                    name,
                    email,
                    password:passwordHash,
                })
        
                await userRepository.save(user);
                return user;
            }
            throw new Error ("User Alredy Exists")
        }

        throw new Error ("Email Incorrect");
       

    }
}

export {UserService};