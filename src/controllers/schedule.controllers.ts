import {Request, Response} from "express"
import createScheduleService from "../services/schedules/createSchedule.service"

const createScheduleController = async (request: Request, response: Response) => {
    const token: any = request.headers.authorization
    const scheduleData = request.body
   
    const newSchedule = await createScheduleService(scheduleData, token)
    
    return response.status(201).json(newSchedule)
}

export default createScheduleController