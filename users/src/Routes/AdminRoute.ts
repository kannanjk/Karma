import { UserIntractor } from "../interactors/userIntractor"
import { UserRepositry } from "../repositoris/userRepository"
import {GetAllUsers} from '../Controllers/Admin/GetAllUser'
import express from 'express'
import { UserAccess } from "../Controllers/Admin/UserAccess"

const repositry = new UserRepositry()
const intracter = new UserIntractor(repositry)
const getAllUser = new GetAllUsers(intracter)
const userAccess = new UserAccess(intracter)

const app = express.Router()

app.get('/getAllUser', getAllUser.OnGetAllUsers.bind(getAllUser))
app.put('/updateUserAccess', userAccess.OnUserAccess.bind(getAllUser))

export default app