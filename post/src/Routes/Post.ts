import express from 'express'
import { CreatePost } from '../Controller/CreatePost'
import { IPostRepositry } from '../interface/IPostRepositry'
import { IPostItractor } from '../interface/IPostIntractor'
import { PostIntractor } from '../Intractor/PostIntractor'
import { Container } from 'inversify'
import { PostRepositry } from '../Repositry/PostRepositry'
import { POST_INTERFACE } from '../utils'
import { GetAllPost } from '../Controller/GetAllPost'
import { GetonePost } from '../Controller/GetUserPost'

const container = new Container()

container
    .bind<IPostRepositry>(POST_INTERFACE.PostRepositry)
    .to(PostRepositry)
container
    .bind<IPostItractor>(POST_INTERFACE.PostIntractor)
    .to(PostIntractor)
container
    .bind(POST_INTERFACE.CreatePost)
    .to(CreatePost)
container
    .bind(POST_INTERFACE.GetAllPost)
    .to(GetAllPost)
container
    .bind(POST_INTERFACE.GetonePost)
    .to(GetonePost)

const createPost = container.get<CreatePost>(POST_INTERFACE.CreatePost)
const getAllpost = container.get<GetAllPost>(POST_INTERFACE.GetAllPost)
const getUserPost = container.get<GetonePost>(POST_INTERFACE.GetonePost)

const app = express.Router()

app.post('/createPost', createPost.OnCreatePost.bind(createPost))
app.get('/getAllPost', getAllpost.OnGetallPost.bind(getAllpost))
app.post('/getUserPost',getUserPost.OnGetUserProduct.bind(getUserPost))

export default app