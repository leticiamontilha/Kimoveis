import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule } from "../../entities"
import { AppError } from "../../errors"

const listAllSchedulesForEstate = async (idEstate: number) => {
    const realEstateRepository = AppDataSource.getRepository(RealEstate)
   
    const realEstate = await realEstateRepository.findOne({
        where: {
            id: idEstate
        }
    })

    if(!realEstate){
        throw new AppError("RealEstate not found", 404)
    }

    const allSchedules = await realEstateRepository.findOne({
        where: {
            id: idEstate
        },
        relations: {
            address: true,
            category: true,
            schedules: {
                user: true
            }
        }
    })
    

    return allSchedules
    
}

export default listAllSchedulesForEstate