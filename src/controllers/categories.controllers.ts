import { Request, Response } from "express"
import { ICategory } from "../interfaces/categories.interfaces"
import createCategoryService from "../services/categories/createCategory.service"
import listAllCategoriesService from "../services/categories/listAllCategories.service"
import listEstateByCategoryService from "../services/categories/listEstateByCategory.service"

const createCategoryController = async (request: Request, response: Response) => {
   
    const categoryData: ICategory = request.body
   
    const newCategory = await createCategoryService(categoryData)
    
    return response.status(201).json(newCategory)
}

const listAllCategoriesController = async (request: Request, response: Response) => {
     
    const allCategories = await listAllCategoriesService()

    return response.json(allCategories)
}

const listEstateByCategoryController = async (request: Request, response: Response) => {
    
    const id = Number(request.params.id)

    const realEstates = await listEstateByCategoryService(id)

    return response.json(realEstates)
}

export {
    createCategoryController,
    listAllCategoriesController,
    listEstateByCategoryController
}