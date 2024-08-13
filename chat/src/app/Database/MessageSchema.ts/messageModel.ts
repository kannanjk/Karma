import mongoose from "mongoose";

interface messageAttrs {
    chatId: string
    receverId: number
    message: string
}

interface messageModel extends mongoose.Model<messageDoc> {
    build(atters: messageAttrs): messageDoc
}

interface messageDoc extends mongoose.Document {
    chatId:string
    receverId: number
    message: string
}

const messageSchema = new mongoose.Schema({
    chatId:{
        type:String,
        require:true
    },
    receverId: {
        type: Number,
        require: true
    },
    message: {
        type: String
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const messageModel = mongoose.model<messageDoc, messageModel>('message', messageSchema)
export { messageModel }