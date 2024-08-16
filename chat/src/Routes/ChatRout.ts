import { ChatIntractor } from "../Intractor/ChatIntractor";
import { IChatIntractor } from "../InterFace/IChatIntractor";
import { IChatRepositry } from "../InterFace/IChatRepositry";
import { Container } from "inversify";
import { ChatRepositry } from "../Repositry/ChatRepositry";
import { CHAT_INTERFACE } from "../utils";
import express from 'express'
import { CreateChat, CreateMessage, GetChat, GetMessage, GetUserChat } from "../Controllers";

const container = new Container()

container
    .bind<IChatRepositry>(CHAT_INTERFACE.ChatRepositry)
    .to(ChatRepositry)
container
    .bind<IChatIntractor>(CHAT_INTERFACE.ChatIntractor)
    .to(ChatIntractor)

const controllers = [
    { route: '/createChat', bindingKey: CHAT_INTERFACE.CreateChat, controller: CreateChat },
    { route: '/getChat', bindingKey: CHAT_INTERFACE.GetChat, controller: GetChat },
    { route: '/getUserChat', bindingKey: CHAT_INTERFACE.GetUserChat, controller: GetUserChat },
    { route: '/createMsg', bindingKey: CHAT_INTERFACE.CreateMessage, controller: CreateMessage },
    { route: '/getMsg', bindingKey: CHAT_INTERFACE.GetMessage, controller: GetMessage },
];

controllers.forEach(({ bindingKey, controller }) =>
    container.bind(bindingKey).to(controller)
);
 
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