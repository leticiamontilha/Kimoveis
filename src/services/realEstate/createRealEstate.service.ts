import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { IAddress, IRealEstateRequest, IRealEstateReturn } from "../../interfaces/realEstates.interface"
import { returnRealEstateSchema } from "../../schemas/realEstate.schemas"

const createRealEstateService = async (estateData: IRealEstateRequest ): Promise<IRealEstateReturn> => {
    const addressRepository = AppDataSource.getRepository(Address)
    const realEstateRepository = AppDataSource.getRepository(RealEstate)
    const categoryRepository = AppDataSource.getRepository(Category)

    const categoryId = await categoryRepository.findOneBy({
        id: estateData.categoryId
    })

    if(!categoryId){
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
        throw new AppError("Address alredy exist", 409)
    }

    let newAddress: Address = addressRepository.create(estateData.address)

    await addressRepository.save(newAddress)

    const newRealEstate: RealEstate | IRealEstateReturn = realEstateRepository.create({
        ...estateData, 
        address: newAddress, 
        category: categoryId
    })

    await realEstateRepository.save(newRealEstate)

    const returnEstate = returnRealEstateSchema.parse(newRealEstate)
   
    return returnEstate
}

export default createRealEstateService