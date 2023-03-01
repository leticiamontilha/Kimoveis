import { Router } from "express"
import { createUserController, listAllUsersController } from "../../controllers/users.controllers"
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware"
import ensureTokenIsValidMidlleware from "../../middlewares/ensureTokenIsValid.middleware"
import { userSchema } from "../../schemas/users.schema"


const userRoutes: Router = Router()

userRoutes.post("", ensureDataIsValidMiddleware(userSchema), createUserController)
userRoutes.get("", ensureTokenIsValidMidlleware, listAllUsersController)
userRoutes.patch("/:id")
userRoutes.delete("/:id")

export default userRoutes