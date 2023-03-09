import { Request } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"
import { IUserReturn, IUserUpdate } from "../../interfaces/users.interface"
import { returnUserSchema } from "../../schemas/users.schema"

const updateUserService = async (newUserData: IUserUpdate, idUser: number, request: Request): Promise<IUserReturn> => {
    const isAdmin = request.user.admin
    const userId = request.user.id

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    if(!isAdmin && userId != idUser){
        throw new AppError("Insufficient permission",403)
    }

    const oldUserData = await userRepository.findOneBy({
        id: idUser
    })

    const user = userRepository.create({
        ...oldUserData,
        ...newUserData
    })

    await userRepository.save(user)

    const updatedUser = returnUserSchema.parse(user)

    return updatedUser

}

export default updateUserService