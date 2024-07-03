import mongoose from "mongoose";

const ChatSchema = mongoose.Schema(
    {
        members: {
            type: Array
        }
    },
    {
        timestamps: true
    }
)

// sweety sree rock

const ChatModel = mongoose.model("Chat", ChatSchema)
export default ChatModel    