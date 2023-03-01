import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { IUser, IUserReturn } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/users.schema";

const createUserService = async (userData: IUser): Promise<IUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const emailExist = await userRepository.findOne({
        where: {
            email: userData.email
        }
    })
    
    if(emailExist){
        throw new AppError("User already exists.", 409)
    }

    const user = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)

    return newUser

}

export default createUserService