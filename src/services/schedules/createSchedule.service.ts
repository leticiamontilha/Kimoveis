import { AppDataSource } from "../../data-source"
import { Schedule } from "../../entities"
import jwt from "jsonwebtoken"
import { AppError } from "../../errors"
import { ISchedule, IScheduleReturn } from "../../interfaces/schedule.interfaces"
import { scheduleSchemaReturn } from "../../schemas/schedules.schema"

const createScheduleService = async (data: ISchedule, token: string): Promise<IScheduleReturn> => {
    const scheduleRepository = AppDataSource.getRepository(Schedule)

    let userId = 0

    token = token.split(" ")[1]

   jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
        if(error){
            throw new AppError(error.message, 401)
        }
        
        userId = decoded.id
    })

    data = {
        ...data,
        userId
    }

    const schedule = scheduleRepository.create(data)

    await scheduleRepository.save(schedule)

    const newSchedule = scheduleSchemaReturn.parse(schedule)

    return newSchedule

}

export default createScheduleService