import { Router } from "express"
import { createCategoryController, listAllCategoriesController } from "../../controllers/categories.controllers"
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware"
import { createCategorySchema } from "../../schemas/categories.schemas"


const categoriesRoutes: Router = Router()

categoriesRoutes.post("", ensureDataIsValidMiddleware(createCategorySchema), createCategoryController)
categoriesRoutes.get("", listAllCategoriesController)
categoriesRoutes.get("/:id/realEstate")

export default categoriesRoutes