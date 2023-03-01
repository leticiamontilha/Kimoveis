import { NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { AppError } from "../errors";


const verifyAdminPermission = async (userId: number, next: NextFunction) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    
    const adminPermission = await userRepository.find({
        where: {
            id: userId,
            admin: true
        }
    })

    if(!adminPermission){
        throw new AppError("o usuario não tem permissão", 403)
    }

    
    return next()
}

export default verifyAdminPermission