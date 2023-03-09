import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import jwt from "jsonwebtoken"
import { AppError } from "../../errors"
import { ISchedule } from "../../interfaces/schedule.interfaces"
import { FindManyOptions } from "typeorm"


const createScheduleService = async (data: ISchedule, token: string): Promise<Schedule>  => {
    const scheduleRepository = AppDataSource.getRepository(Schedule)
    const userRepository = AppDataSource.getRepository(User)
    const realEstateRepository = AppDataSource.getRepository(RealEstate)

    let userId = 0
   
    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if(error){
            throw new AppError(error.message, 401)
        }
        
        userId = decoded.id
    })

    const user = await userRepository.findOneBy({
        id: userId
    })
    

    const realEstate = await realEstateRepository.findOneBy({
        id: data.realEstateId
    })

    if(!realEstate){
        throw new AppError("RealEstate not found", 404)
    }

    const hourNumber = parseInt(data.hour)

    if( hourNumber < 8 || hourNumber >= 18){
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }

    const getDay = new Date(data.date).getDay()

    if(getDay === 0 || getDay === 6){
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }

    const schedule = scheduleRepository.create({
        ...data,
        realEstate: realEstate!,
        user: user!
    })

    await scheduleRepository.save(schedule)

    return schedule

}

export default createScheduleService