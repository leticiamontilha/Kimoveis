import { Router } from "express"
import {createScheduleController, listSchedulebyEstateController} from "../../controllers/schedule.controllers"
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware"
import ensureTokenIsValidMidlleware from "../../middlewares/ensureTokenIsValid.middleware"
import verifyAdminPermission from "../../middlewares/verifyAdminPermission.middleware"
import { createScheduleSchema } from "../../schemas/schedules.schema"


const schedulesRoutes: Router = Router()

schedulesRoutes.post("", ensureTokenIsValidMidlleware, ensureDataIsValidMiddleware(createScheduleSchema), createScheduleController)
schedulesRoutes.get("/realEstate/:id", verifyAdminPermission, listSchedulebyEstateController)


export default schedulesRoutes

