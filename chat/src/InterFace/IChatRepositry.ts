import { Chat } from "app/entity/Chat"
import { Message } from "app/entity/Message"

export interface IChatRepositry{
    CreateChat (input:any):any
    getChat(input:any):any
    GetUserChat (input:any):Promise<Chat>
    createMessage(input:any):any
    getMessage(input:any):Promise<Message[]>
}