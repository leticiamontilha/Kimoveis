import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { IAllCategoriesReturn } from "../../interfaces/categories.interface"
import { returnAllCategoriesSchema } from "../../schemas/categories.schemas"

const listAllCategoriesService = async (): Promise<IAllCategoriesReturn>  => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategories = await categoryRepository.find()

    const allCategories =  returnAllCategoriesSchema.parse(findCategories)
    
    return allCategories 
}

export default listAllCategoriesService