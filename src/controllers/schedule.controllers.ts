import {Request, Response} from "express"
import createScheduleService from "../services/schedules/createSchedule.service"
import listAllSchedulesForEstate from "../services/schedules/listAllSchedulesForEstate.service"

const createScheduleController = async (request: Request, response: Response) => {
    const token: any = request.headers.authorization
    const scheduleData = request.body
    const newSchedule = await createScheduleService(scheduleData, token)

    return response.status(201).json({
        message: "Schedule created"
    })
}

const listSchedulebyEstateController = async (request: Request, response: Response) => {
    const id = +request.params.id
    const scheduleEstate = await listAllSchedulesForEstate(id)

    return response.json(scheduleEstate)
}

export {
    createScheduleController,
    listSchedulebyEstateController
} 
    