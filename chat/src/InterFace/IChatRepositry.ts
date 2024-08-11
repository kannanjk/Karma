import { Chat } from "app/entity/Chat"

export interface IChatRepositry{
    CreateChat (input:any):any
    getChat(input:any):any
    GetUserChat (input:any):Promise<Chat>
}