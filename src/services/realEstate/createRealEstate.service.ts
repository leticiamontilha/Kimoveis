import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { IRealEstateRequest, IRealEstateReturn } from "../../interfaces/realEstates.interface"
import { returnRealEstateSchema } from "../../schemas/realEstate.schemas"

const createRealEstateService = async (estateData: IRealEstateRequest ): Promise<RealEstate> => {
    const addressRepository = AppDataSource.getRepository(Address)
    const realEstateRepository = AppDataSource.getRepository(RealEstate)
    const categoryRepository = AppDataSource.getRepository(Category)

    const category = await categoryRepository.findOneBy({
        id: estateData.categoryId
    })

    if(!category){
        throw new AppError("Category not found", 404)
    }

    const address: Address | null = await addressRepository.findOneBy({
        number: estateData.address.number ? estateData.address.number : "",
        street: estateData.address.street,
        zipCode: estateData.address.zipCode,
        city: estateData.address.city,
        state: estateData.address.state 
    })

    if(address) {
        throw new AppError("Address alredy exists", 409)
    }
    
    let newAddress: Address = addressRepository.create(estateData.address)

    await addressRepository.save(newAddress)

    const newRealEstate = realEstateRepository.create({
        ...estateData, 
        address: newAddress, 
        category
    })

    await realEstateRepository.save(newRealEstate)
   
    return newRealEstate
}

export default createRealEstateService