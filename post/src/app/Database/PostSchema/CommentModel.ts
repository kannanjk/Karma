import mongoose from "mongoose";

interface commentsAttr {
    content: string,
    postId: any
    userId: number
    likes: number[]
    replay: number[]
}

interface commentModel extends mongoose.Model<commentDoc> {
    build(atters: commentsAttr): commentDoc
}

interface commentDoc extends mongoose.Document {
    content: string,
    postId: any
    userId: number
    likes: number[]
    replay: number[]
    updatedAt: string
}

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    postId: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    userId: {
        type: Number,
        require: true
    },
    likes: [],
    replay: [],

},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
)

const commentModel = mongoose.model<commentDoc, commentModel>('comments', commentSchema)
export { commentModel }