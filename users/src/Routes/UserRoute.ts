import express from 'express'
import { LoginUser } from '../Controllers/User/LoginUser'
import { CreaterUser } from '../Controllers/User/CreateUser'
import { UpdateUser } from '../Controllers/User/UpdateUser'
import { UserRepositry } from '../repositoris/userRepository';
import { UserIntractor } from '../interactors/userIntractor';


const app = express.Router()

const repositry = new UserRepositry()
const intracter = new UserIntractor(repositry)
const regController = new CreaterUser(intracter)
const logController = new LoginUser(intracter)
const updateUser = new UpdateUser(intracter)

app.post('/signUp', regController.OnCreateUser.bind(regController))
app.post('/login', logController.OnLoginUser.bind(logController))
app.put('/update', updateUser.OnUpdate.bind(updateUser))

export default app  