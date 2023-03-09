import { Router } from "express"
import { createUserController, listAllUsersController, softDeleteUserController, updateUserController } from "../../controllers/users.controllers"
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middleware"
import ensureTokenIsValidMidlleware from "../../middlewares/ensureTokenIsValid.middleware"
import userIdExist from "../../middlewares/userIdExist.middleware"
import verifyAdminPermission from "../../middlewares/verifyAdminPermission.middleware"
import { updateUserSchema, userSchema } from "../../schemas/users.schema"


const userRoutes: Router = Router()

userRoutes.post("", ensureDataIsValidMiddleware(userSchema), createUserController)
userRoutes.get("", ensureTokenIsValidMidlleware, verifyAdminPermission, listAllUsersController)
userRoutes.patch("/:id", ensureTokenIsValidMidlleware, userIdExist, ensureDataIsValidMiddleware(updateUserSchema), updateUserController)
userRoutes.delete("/:id", ensureTokenIsValidMidlleware, verifyAdminPermission, userIdExist, softDeleteUserController)

export default userRoutes