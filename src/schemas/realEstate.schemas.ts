import { z } from 'zod'

const createRealEstateSchema= z.object({
    value: z.number(),
    size: z.number(),
    address: z.object({
        street: z.string(),
        zipCode: z.string(),
        number: z.string().optional(),
        city: z.string(),
        state: z.string().max(2)
    }),
    sold: z.boolean().optional().default(false),
    category: z.number(),
})

const returnRealEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
})


const returnAllRealEstatesSchema = returnRealEstateSchema.array()

export {
    createRealEstateSchema,
    returnRealEstateSchema,
    returnAllRealEstatesSchema
}
