import { Container } from 'inversify'
import express from 'express'
import { IPostRepositry } from '../interface/IPostRepositry'
import { POST_INTERFACE } from '../utils'
import { PostRepositry } from '../Repositry/PostRepositry'
import { CreateComment } from '../Controller/CreateComments'
import { IPostItractor } from '../interface/IPostIntractor'
import { PostIntractor } from '../Intractor/PostIntractor'
import { GetComment } from '../Controller/GetComments'
  
const container = new Container() 

container
    .bind<IPostRepositry>(POST_INTERFACE.PostRepositry)
    .to(PostRepositry)
container
    .bind<IPostItractor>(POST_INTERFACE.PostIntractor)
    .to(PostIntractor)
container
    .bind(POST_INTERFACE.CreateComment)
    .to(CreateComment)
container
    .bind(POST_INTERFACE.GetComment)
    .to(GetComment)

const createComment = container.get<CreateComment>(POST_INTERFACE.CreateComment)
const getComment = container.get<GetComment>(POST_INTERFACE.GetComment)

const app = express.Router()

app.post('/createComment', createComment.OnCommetnt.bind(createComment))
app.post('/getComment', getComment.OnGetComment.bind(getComment))

export default app