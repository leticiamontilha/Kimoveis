import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import {returnRealEstateSchema} from "../../schemas/realEstate.schemas"

const createRealEstateService = async (estateData: any) => {
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const addressExist = await addressRepository.findOneBy({
        street: estateData.address.street
    })

    if(addressExist){
        throw new AppError("Address already registered", 409)
    }

    const categoryExist = await categoryRepository.findOneBy({
        id: estateData.category
    })

    if(!categoryExist){
        throw new AppError("Category not found", 409)
    }

    const newRealEstate = realEstateRepository.create(estateData)

    await realEstateRepository.save(newRealEstate)

    const newEstate = returnRealEstateSchema.parse(estateData)
    
    return newEstate
}

export default createRealEstateService