import { Router } from "express"
import { createRealEstateController, listAllRealEstateController } from "../../controllers/realEstates.controllers"
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware"
import verifyAdminPermission from "../../middlewares/verifyAdminPermission.middleware"
import { createRealEstateSchema } from "../../schemas/realEstate.schemas"


const realEstateRoutes: Router = Router()

realEstateRoutes.post("", verifyAdminPermission, ensureDataIsValidMiddleware(createRealEstateSchema), createRealEstateController)
realEstateRoutes.get("", listAllRealEstateController)

export default realEstateRoutes