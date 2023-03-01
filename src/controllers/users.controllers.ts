import {Request, Response} from "express"
import { IUser } from "../interfaces/users.interface"
import createUserService from "../services/users/createUser.service"
import listAllUsersService from "../services/users/listAllUsers.service"

const createUserController = async (request: Request, response: Response) => {
   
    const userData: IUser = request.body
   
    const newUser = await createUserService(userData)
    
    return response.status(201).json(newUser)
}

const listAllUsersController = async (request: Request, response: Response) => {

    const allUsers = await listAllUsersService()

    return response.json(allUsers)
}   

export {
    createUserController,
    listAllUsersController
}