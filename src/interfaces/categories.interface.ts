import { z } from "zod"
import { createCategorySchema, returnCategorySchema } from "../schemas/categories.schemas"

type ICategory = z.infer<typeof createCategorySchema>
type ICategoryReturn = z.infer<typeof returnCategorySchema>


export {
    ICategory,
    ICategoryReturn
}