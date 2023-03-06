import { z } from 'zod'
import { createScheduleSchema, scheduleSchemaReturn } from '../schemas/schedules.schema'

type ISchedule = z.infer<typeof createScheduleSchema>
type IScheduleReturn = z.infer<typeof scheduleSchemaReturn>

export {
    ISchedule,
    IScheduleReturn
}