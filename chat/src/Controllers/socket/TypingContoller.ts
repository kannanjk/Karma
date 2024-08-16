import { BaseController } from "./baseContoller"

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
}      