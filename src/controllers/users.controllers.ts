import {Request, Response} from "express"
import { IUser, IUserUpdate } from "../interfaces/users.interface"
import createUserService from "../services/users/createUser.service"
import listAllUsersService from "../services/users/listAllUsers.service"
import softDeleteUserService from "../services/users/softDeleteUser.service"
import updateUserService from "../services/users/updateUser.service"

const createUserController = async (request: Request, response: Response) => {
   
    const userData: IUser = request.body
   
    const newUser = await createUserService(userData)
    
    return response.status(201).json(newUser)
}

const listAllUsersController = async (request: Request, response: Response) => {

    const allUsers = await listAllUsersService()

    return response.json(allUsers)
}   

const updateUserController = async (request: Request, response: Response) => {

    const userData: IUserUpdate = request.body
    const idUser = Number(request.params.id)

    const updatedUser = await updateUserService(userData, idUser, request)

    return response.json(updatedUser)
}

const softDeleteUserController = async (request: Request, response: Response) => {
    
    const userId = +request.params.id

    await softDeleteUserService(userId)

    return response.status(204).json()
}

export {
    createUserController,
    listAllUsersController,
    softDeleteUserController,
    updateUserController
}