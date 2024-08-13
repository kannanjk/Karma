interface MessageData {
    chatId: string
    message: string
}

export class Message {
    chatId: string
    message?: string
    constructor({ chatId, message }: MessageData) {
    }
}