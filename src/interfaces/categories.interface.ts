import { z } from "zod"
import { createCategorySchema, returnAllCategoriesSchema, returnCategorySchema } from "../schemas/categories.schemas"

type ICategory = z.infer<typeof createCategorySchema>
type ICategoryReturn = z.infer<typeof returnCategorySchema>
type IAllCategoriesReturn = z.infer<typeof returnAllCategoriesSchema>


export {
    ICategory,
    ICategoryReturn,
    IAllCategoriesReturn
}