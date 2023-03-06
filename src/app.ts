import 'express-async-errors'
import express, { Application } from 'express'
import userRoutes from './routers/users/users.routes'
import { handleErrors } from './errors'
import loginRoutes from './routers/login/login.routes'
import categoriesRoutes from './routers/categories/categories.routes'
import realEstateRoutes from './routers/realEstate/realEstate.routes'
import schedulesRoutes from './routers/schedules/schedules.routes'


const app: Application = express()
app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/categories", categoriesRoutes)
app.use("/realEstate", realEstateRoutes)
app.use("/schedules", schedulesRoutes)

app.use(handleErrors)
export default app