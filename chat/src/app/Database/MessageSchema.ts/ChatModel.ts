import mongoose from "mongoose";

interface ChatAttrs {
    member: []
}

interface ChatModel extends mongoose.Model<ChatDoc> {
    build(atters: ChatAttrs): ChatDoc
}

interface ChatDoc extends mongoose.Document {
    member: number[]
}

const chatSchema = new mongoose.Schema({
    member: [
        {
            type: Number
        }
    ]
},
    {
        timestamps: true
    })

const ChatModel = mongoose.model<ChatDoc, ChatModel>("Chat", chatSchema)
export { ChatModel }