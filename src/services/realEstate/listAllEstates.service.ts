import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"

const listAllRealEstatesService = async () => {

    const realEstaeRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findRealEstate = await realEstaeRepository.find()
    
    return findRealEstate 
}

export default listAllRealEstatesService