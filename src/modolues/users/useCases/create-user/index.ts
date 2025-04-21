import {UserPrismaRepository} from "../../repositories/implemetsations/user.prisma.repository";
import {CreateUserController} from "./create-user.controler";

const userPrismaRepository = new UserPrismaRepository();
const createUserController = new CreateUserController(userPrismaRepository);

export { createUserController};
