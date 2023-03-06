import { z } from "zod";

const createScheduleSchema = z.object({
    date: z.string(),
    hour: z.string(),
    propertieId: z.number().int().optional(),
    userId: z.number().optional()
});


const scheduleSchemaReturn = createScheduleSchema.extend({
    id: z.number(),
})

export {
    createScheduleSchema,
    scheduleSchemaReturn
}