import { z } from "zod"

const createCategorySchema = z.object({
    name: z.string().min(2).max(45)
})

const returnCategorySchema = createCategorySchema.extend({
    id: z.number()
})

const returnAllCategoriesSchema = returnCategorySchema.array()


export {
    createCategorySchema,
    returnCategorySchema,
    returnAllCategoriesSchema
}