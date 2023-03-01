import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IUser, IUserReturn } from "../../interfaces/users.interface";
import { returnUser } from "../../schemas/users/users.schema";

const createUserService = async (userData: IUser): Promise<IUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUser.parse(user)

    return newUser

}

export default createUserService