import express from 'express'
import { UserController } from "../Controllers/userControllers";
import { UserRepositry } from '../repositoris/userRepository';
import { UserIntractor } from '../interactors/userIntractor';
  
const app = express.Router()  

const repositry = new UserRepositry()
const intracter = new UserIntractor(repositry)
const controller = new UserController(intracter)

app.post('/signUp', controller.OnCreateUser.bind(controller))
app.post('/login', controller.OnLoginUser.bind(controller))
 
export default app  