import {IUserRepository} from "../user.repository";
import {User} from "../../entities/user.entity";

export class UserPrismaRepository implements IUserRepository {

    findByUsername(username: string): Promise<User> {
        throw new Error("Method not implemented.");
        // return Promise.resolve(undefined);
    }

    save(data: User): Promise<User> {
        throw new Error("Method not implemented.");
    }


}