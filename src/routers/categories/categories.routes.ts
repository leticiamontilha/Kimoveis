import { Router } from "express"
import { createCategoryController } from "../../controllers/users.controllers"
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware"
import { createCategorySchema } from "../../schemas/categories.schemas"


const categoriesRoutes: Router = Router()

categoriesRoutes.post("", ensureDataIsValidMiddleware(createCategorySchema), createCategoryController)

export default categoriesRoutes