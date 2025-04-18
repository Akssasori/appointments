import { User } from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user.repository";

type UserRequest = {
    name: string;
    username: string;
    password: string;
}

export class CreateUserUseCase {

    async execute(data: UserRequest) {

        const userRepository = new UserRepository();
        const user = User.create(data);

        console.log({data})

        if (!data.username || !data.password) {
            throw new Error('Username/password are required!')
        }

        const existUser = await userRepository.findByUsername(data.username);

        if (existUser) {
            throw new Error('User already exists!')
        }

        const userCreated = await userRepository.save(user);
        return userCreated;
    }
}