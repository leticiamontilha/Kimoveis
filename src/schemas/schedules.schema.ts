import { z } from "zod";

const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().int().positive(),
    userId: z.number().optional()
});


const scheduleSchemaReturn = createScheduleSchema.extend({
    id: z.number(),
    
})

export {
    createScheduleSchema,
    scheduleSchemaReturn
}