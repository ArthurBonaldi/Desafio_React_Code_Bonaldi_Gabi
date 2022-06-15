import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest{
    id?:string;
    name:string;
    email:string;
    password:string;
}


class UserService{
    async create({name, email, password}: IUserRequest){
        const userRepository = getCustomRepository(UsersRepositories);


        const user = userRepository.create({
            name,
            email,
            password
        })

        await userRepository.save(user);

        return user;

    }
}

export {UserService};