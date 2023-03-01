import { userSchema, returnUser } from "../schemas/users/users.schema"
import { z } from "zod"

type IUser = z.infer<typeof userSchema>
type IUserReturn = z.infer<typeof returnUser>


export {
    IUser,
    IUserReturn
}