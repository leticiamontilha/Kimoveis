import { Router } from "express"
import createScheduleController from "../../controllers/schedule.controllers"
import verifyAdminPermission from "../../middlewares/verifyAdminPermission.middleware"


const schedulesRoutes: Router = Router()

schedulesRoutes.post("", createScheduleController)


export default schedulesRoutes

