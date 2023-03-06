import { AppDataSource } from "../../data-source"
import { Category, RealEstate } from "../../entities"

const listEstateByCategoryService = async (id: number) =>{
    const categoriesRepository = AppDataSource.getRepository(Category)
    const estateRepository = AppDataSource.getRepository(RealEstate)

    const category = await categoriesRepository.findOneBy({
        id: id
    })

    const estate = await estateRepository.find({
        relations: {
            category: true
        }
    })

    const estatesByCategories = estate.filter((el) => el.category.id === category?.id)

    return estatesByCategories
}

export default listEstateByCategoryService