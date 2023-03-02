import {Request, Response} from "express"
import { ICategory } from "../interfaces/categories.interface"
import { IUser } from "../interfaces/users.interface"
import createUserService from "../services/users/createUser.service"
import listAllUsersService from "../services/users/listAllUsers.service"
import softDeleteUserService from "../services/users/softDeleteUser.service"
import createCategoryService from "../services/categories/createCategory.service"

const createUserController = async (request: Request, response: Response) => {
   
    const userData: IUser = request.body
   
    const newUser = await createUserService(userData)
    
    return response.status(201).json(newUser)
}

const listAllUsersController = async (request: Request, response: Response) => {

    const allUsers = await listAllUsersService()

    return response.json(allUsers)
}   

const softDeleteUserController = async (request: Request, response: Response) => {
    
    const userId = +request.params.id

    await softDeleteUserService(userId)

    return response.json()
}

const createCategoryController = async (request: Request, response: Response) => {
   
    const categoryData: ICategory = request.body
   
    const newCategory = await createCategoryService(categoryData)
    
    return response.status(201).json(newCategory)
}

export {
    createUserController,
    listAllUsersController,
    softDeleteUserController,
    createCategoryController
}