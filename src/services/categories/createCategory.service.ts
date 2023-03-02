import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../errors"
import { ICategory, ICategoryReturn } from "../../interfaces/categories.interface"
import { returnCategorySchema } from "../../schemas/categories.schemas"

const createCategoryService = async (categoryData: ICategory): Promise<ICategoryReturn> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const categoryExist = await categoryRepository.findOne({
        where: {
            name: categoryData.name
        }
    })
    
    if(categoryExist){
        throw new AppError("Category already exists.", 409)
    }

    const category = categoryRepository.create(categoryData)

    await categoryRepository.save(category)

    const newCategory= returnCategorySchema.parse(category)

    return newCategory

}

export default createCategoryService