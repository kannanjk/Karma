import { messageModel } from "../../app/Database/MessageSchema.ts/messageModel"
import { BaseController } from "./baseContoller"
import { io } from "../../index"

export class TypingController extends BaseController {
    typinStarted = (chatId: any) => {
        let skt = this.socket.broadcast
        const a = 'typing-started-server' + chatId.userId
        skt.emit(a, chatId)
    }
    typingStoped = (chatId: any) => {
        let skt = this.socket.broadcast
        const a = 'typing-stoped-server' + chatId.userId
        skt.emit(a, chatId)
    }
    createMsg = async (input: any) => {
        const newMsg = new messageModel(input)
        const msg = await newMsg.save()
        if (input.roomId) {
            // this.socket.broadcast
                io.to(input.roomId)
                .emit("message-from-server", msg)
        }
        return msg
    }
}      