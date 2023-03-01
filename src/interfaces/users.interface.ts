import { userSchema, returnUserSchema, returnAllUsersSchema } from "../schemas/users.schema"
import { z } from "zod"

type IUser = z.infer<typeof userSchema>
type IUserReturn = z.infer<typeof returnUserSchema>
type IAllUsersReturn = z.infer<typeof returnAllUsersSchema>


export {
    IUser,
    IUserReturn,
    IAllUsersReturn
}