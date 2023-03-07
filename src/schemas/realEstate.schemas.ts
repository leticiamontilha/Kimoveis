import { z } from 'zod'
import { returnCategorySchema } from './categories.schemas'

const createAdressSchema = z.object({
        street: z.string(),
        zipCode: z.string().max(8, {message: "String must contain at most 8 character(s)"}),
        number: z.string().max(7).optional(),
        city: z.string(),
        state: z.string().max(2, {message: "String must contain at most 2 character(s)"})
})

 const returnAddressSchema = createAdressSchema.extend({
    id: z.number()
 })

const createRealEstateSchema= z.object({
    value: z.number().or(z.string()),
    size: z.number().int(),
    address: createAdressSchema,
    categoryId: z.number()
})

const returnRealEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
    createdAt: z.date().or(z.string()),
    updatedAt: z.date().or(z.string()),
    sold: z.boolean().default(false)
}).omit({
    categoryId: true
})

const returnAllRealEstatesSchema = returnRealEstateSchema.array()

const returnEstatesByCategorySchema = z.object({
    category: returnCategorySchema,
    estates: returnAllRealEstatesSchema
})

export {
    createRealEstateSchema,
    returnRealEstateSchema,
    returnAllRealEstatesSchema,
    createAdressSchema,
    returnEstatesByCategorySchema,
    
}
