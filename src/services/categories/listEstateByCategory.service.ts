import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../errors"


const listEstateByCategoryService = async (id: number) =>{
    const categoriesRepository = AppDataSource.getRepository(Category)

    const category = await categoriesRepository.findOne({
        where: {
            id: id
        },
        relations: {
            realEstate: true
        }
    })

    if(!category){
        throw new AppError("Category not found", 404)
    }

    return category
}

export default listEstateByCategoryService