import express from 'express'
import { CreaterUser } from '../Controllers/User/CreateUser'
import { UserIntractor } from '../interactors/userIntractor'
import { IUserRepositry } from '../interfaces/IUserRepositry'
import { IUserInteractor } from '../interfaces/userIntractor'
import { Container } from 'inversify'
import { UserRepositry } from '../repositoris/userRepository'
import { INTERFACE_TYPE } from '../utils'
import { LoginUser } from '../Controllers/User/LoginUser'
import { UpdateUser } from '../Controllers/User/UpdateUser'


const container = new Container()

container 
    .bind<IUserRepositry>(INTERFACE_TYPE.UserRepositry)
    .to(UserRepositry)

container
    .bind<IUserInteractor>(INTERFACE_TYPE.UserIntractor)
    .to(UserIntractor)

container
    .bind(INTERFACE_TYPE.CreaterUser)
    .to(CreaterUser)
container
    .bind(INTERFACE_TYPE.LoginUser)
    .to(LoginUser)
    container
    .bind(INTERFACE_TYPE.UpdateUser)
    .to(UpdateUser)

const controller = container.get<CreaterUser>(INTERFACE_TYPE.CreaterUser)
const login = container.get<LoginUser>(INTERFACE_TYPE.LoginUser)


const app = express.Router()

app.post('/signUp', controller.OnCreateUser.bind(controller))
app.post('/login', login.OnLoginUser.bind(login))
// app.put('/update', updateUser.OnUpdate.bind(updateUser))

export default app  