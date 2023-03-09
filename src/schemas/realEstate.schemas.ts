import { any, z } from 'zod'
import { returnCategorySchema } from './categories.schemas'

const createAdressSchema = z.object({
        street: z.string(),
        zipCode: z.string().max(8, {message: "String must contain at most 8 character(s)"}),
        number: z.string().max(7).optional().nullable(),
        city: z.string(),
        state: z.string().max(2, {message: "String must contain at most 2 character(s)"})
})

 const returnAddressSchema = createAdressSchema.extend({
    id: z.any()
 })

const createRealEstateSchema= z.object({
    value: z.number().or(z.string()),
    size: z.number().int().min(0, {message: "Number must be greater than 0"}),
    address: createAdressSchema,
    categoryId: z.number()
})

const returnRealEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    sold: z.boolean().default(false)
}).omit({
    categoryId: true
})

const returnAllEstates = z.object({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    sold: z.boolean().default(false),
    address: returnAddressSchema,
    category: returnCategorySchema
})

const returnAllRealEstatesSchema = returnAllEstates.array()


export {
    createRealEstateSchema,
    returnRealEstateSchema,
    returnAllRealEstatesSchema,
    createAdressSchema,
    
}
