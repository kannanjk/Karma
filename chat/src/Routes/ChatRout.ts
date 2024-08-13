import { ChatIntractor } from "../Intractor/ChatIntractor";
import { CreateChat } from "../Controllers/CreateChat";
import { IChatIntractor } from "../InterFace/IChatIntractor";
import { IChatRepositry } from "../InterFace/IChatRepositry";
import { Container } from "inversify";
import { ChatRepositry } from "../Repositry/ChatRepositry";
import { CHAT_INTERFACE } from "../utils";
import express from 'express'
import { GetChat } from "../Controllers/GetChat";
import { GetUserChat } from "../Controllers/GetUserChat";
import { CreateMessage } from "../Controllers/CreateMessage";
import { GetMessage } from "../Controllers/GetMessage";


const container = new Container()

container
    .bind<IChatRepositry>(CHAT_INTERFACE.ChatRepositry)
    .to(ChatRepositry)
container
    .bind<IChatIntractor>(CHAT_INTERFACE.ChatIntractor)
    .to(ChatIntractor)
container
    .bind(CHAT_INTERFACE.CreateChat)
    .to(CreateChat)
container
    .bind(CHAT_INTERFACE.GetChat)
    .to(GetChat)
container
    .bind(CHAT_INTERFACE.GetUserChat)
    .to(GetUserChat)
container
    .bind(CHAT_INTERFACE.CreateMessage)
    .to(CreateMessage)
container
    .bind(CHAT_INTERFACE.GetMessage)
    .to(GetMessage)

const createChat = container.get<CreateChat>(CHAT_INTERFACE.CreateChat)
const getChat = container.get<GetChat>(CHAT_INTERFACE.GetChat)
const getUserChat = container.get<GetUserChat>(CHAT_INTERFACE.GetUserChat)
const createMsg = container.get<CreateMessage>(CHAT_INTERFACE.CreateMessage)
const getMsg = container.get<GetMessage>(CHAT_INTERFACE.GetMessage)

const app = express.Router()

app.post('/createChat', createChat.OnCreateChat.bind(createChat))
app.post('/getChat', getChat.OnGetChat.bind(getChat))
app.post('/getUserChat', getUserChat.OnGetUserChat.bind(getUserChat))
app.post('/createMsg', createMsg.OnCreateMessage.bind(createMsg))
app.post('/getMsg', getMsg.OnGetmessage.bind(getMsg))

export default app