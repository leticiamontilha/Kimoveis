import { Router } from "express"
import { createUserController } from "../../controllers/users/users.controllers"
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware"
import { userSchema } from "../../schemas/users/users.schema"

const userRoutes: Router = Router()

userRoutes.post("", ensureDataIsValidMiddleware(userSchema), createUserController)

export default userRoutes