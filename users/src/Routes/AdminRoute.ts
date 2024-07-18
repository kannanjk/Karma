import express from 'express'
import { UserIntractor } from "../interactors/userIntractor"
import { UserRepositry } from "../repositoris/userRepository"
import { Container } from "inversify"
import { IUserRepositry } from "../interfaces/IUserRepositry"
import { ADMIN_TYPE, INTERFACE_TYPE } from "../utils"
import { IUserInteractor } from "../interfaces/userIntractor"
import { GetAllUsers } from '../Controllers/Admin/GetAllUser'
import { UserAccess } from '../Controllers/Admin/UserAccess'

const container = new Container()

container
    .bind<IUserRepositry>(INTERFACE_TYPE.UserRepositry)
    .to(UserRepositry)

container
    .bind<IUserInteractor>(INTERFACE_TYPE.UserIntractor)
    .to(UserIntractor)

container
    .bind(ADMIN_TYPE.GetAllUsers)
    .to(GetAllUsers)
container
    .bind(ADMIN_TYPE.UserAccess)
    .to(UserAccess)

const controller = container.get<GetAllUsers>(ADMIN_TYPE.GetAllUsers)
const userupdat = container.get<UserAccess>(ADMIN_TYPE.UserAccess)

const app = express.Router()

app.get('/getAllUser', controller.OnGetAllUsers.bind(controller))
app.put('/updateUserAccess', userupdat.OnUserAccess.bind(userupdat))

export default app