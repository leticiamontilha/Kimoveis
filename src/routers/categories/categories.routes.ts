import { Router } from "express"
import { createCategoryController, listAllCategoriesController, listEstateByCategoryController } from "../../controllers/categories.controllers"
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware"
import verifyAdminPermission from "../../middlewares/verifyAdminPermission.middleware"
import { createCategorySchema } from "../../schemas/categories.schemas"


const categoriesRoutes: Router = Router()

categoriesRoutes.post("", verifyAdminPermission, ensureDataIsValidMiddleware(createCategorySchema), createCategoryController)
categoriesRoutes.get("", listAllCategoriesController)
categoriesRoutes.get("/:id/realEstate", listEstateByCategoryController)

export default categoriesRoutes