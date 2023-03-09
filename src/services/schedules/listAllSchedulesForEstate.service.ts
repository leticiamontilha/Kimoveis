import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule } from "../../entities"
import { AppError } from "../../errors"

const listAllSchedulesForEstateService = async (idEstate: number) => {
    const realEstateRepository = AppDataSource.getRepository(RealEstate)

    const schedules = await realEstateRepository.findOne({
        where: {
            id: idEstate
        },
        relations: {
            schedules: true
        }
    })
    
    if(!schedules){
        throw new AppError("Schedule not found", 404)
    }

    return schedules

}

export default listAllSchedulesForEstateService