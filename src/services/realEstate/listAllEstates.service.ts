import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { IAllRealEstatesReturn } from "../../interfaces/realEstates.interface"


const listAllRealEstatesService = async (): Promise<RealEstate[]> => {

    const realEstaeRepository = AppDataSource.getRepository(RealEstate)

    const findRealEstate = await realEstaeRepository.find({
        relations: {
            address: true
        }
    })
    
    return findRealEstate 
}

export default listAllRealEstatesService