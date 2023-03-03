import { z } from 'zod'

const userSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().min(10).max(45),
    admin: z.boolean().optional().default(false),
    password: z.string().min(4).max(120)
})

const returnUserSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
}).omit({password: true})

const returnAllUsersSchema = returnUserSchema.array()

export {
    userSchema,
    returnUserSchema,
    returnAllUsersSchema   
}