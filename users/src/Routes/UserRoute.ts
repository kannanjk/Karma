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
import { GetUserProfile } from '../Controllers/User/GetUserProfile'
import { GetUserData } from '../Controllers/User/GetUserData'
import multer from "multer";
import { UploadImage } from '../Controllers/User/UploadImage'

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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
container
    .bind(INTERFACE_TYPE.GetUserProfile)
    .to(GetUserProfile)
container
    .bind(INTERFACE_TYPE.GetUserData)
    .to(GetUserData)
container
    .bind(INTERFACE_TYPE.uploadImage)
    .to(UploadImage)

const controller = container.get<CreaterUser>(INTERFACE_TYPE.CreaterUser)
const login = container.get<LoginUser>(INTERFACE_TYPE.LoginUser)
const updateUser = container.get<UpdateUser>(INTERFACE_TYPE.UpdateUser)
const getUserProfile = container.get<GetUserProfile>(INTERFACE_TYPE.GetUserProfile)
const getUserData = container.get<GetUserData>(INTERFACE_TYPE.GetUserData)
const uploadImage = container.get<UploadImage>(INTERFACE_TYPE.uploadImage)

const app = express.Router()

app.post('/signUp', controller.OnCreateUser.bind(controller))
app.post('/login', login.OnLoginUser.bind(login))
app.put('/update', updateUser.OnUpdate.bind(updateUser))
app.post('/getOneUser', getUserProfile.OnGetProfile.bind(getUserProfile))
app.post('/getUserData', getUserData.OnGetUserData.bind(getUserData))
app.post('/uploadImage', uploadImage.OnUploadImage.bind(uploadImage),upload.single("image"))

export default app