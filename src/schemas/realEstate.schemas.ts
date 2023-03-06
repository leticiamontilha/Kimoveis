import { z } from 'zod'

const createAdressSchema = z.object({
        street: z.string(),
        zipCode: z.string(),
        number: z.string().optional(),
        city: z.string(),
        state: z.string().max(2)
})

const createRealEstateSchema= z.object({
    value: z.number(),
    size: z.number().int(),
    address: createAdressSchema,
    categoryId: z.number(),
})

const returnRealEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    sold: z.boolean().default(false)
})


const returnAllRealEstatesSchema = returnRealEstateSchema.array()

export {
    createRealEstateSchema,
    returnRealEstateSchema,
    returnAllRealEstatesSchema,
    createAdressSchema
}
