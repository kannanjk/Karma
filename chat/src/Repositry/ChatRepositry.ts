import { Chat } from "app/entity/Chat";
import { ChatModel } from "../app/Database/MessageSchema.ts/ChatModel";
import { IChatRepositry } from "InterFace/IChatRepositry";
import { injectable } from "inversify";
import { messageModel } from "../app/Database/MessageSchema.ts/messageModel";
import { Message } from "app/entity/Message";
import { Socket } from "socket.io";

@injectable()
export class ChatRepositry implements IChatRepositry {
    

    async CreateChat(input: any) {

        const newChat = new ChatModel({
            member: [input.senderId, input.receverId]
        })
        const res = await newChat.save()


        return res
    }
    async GetUserChat(input: any): Promise<any> {
        const chat = await ChatModel.find({
            member: {
                $in: [input.userId]
            }
        })
        if (chat) {
            return chat
        }
    }
    async getChat(input: any) {
        const user = await ChatModel.findOne({
            member: { $all: [input.senderId, input.receverId] }
        })
        return user
    }
    async createMessage(input: any) {
        
        const newMsg = new messageModel(input)
        const msg = await newMsg.save()
        
        return msg

    }
    async getMessage(input: any): Promise<Message[]> {
        const msgs = await messageModel.find({
            chatId: input.chatId
        })
        if (msgs) {
            return msgs
        }
    }
}



