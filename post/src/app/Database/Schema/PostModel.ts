import mongoose, { mongo, Types } from "mongoose";

interface PostAttrs {
    user: Types.ObjectId
    content: string
    image: string
    likes: string[]
    comments: string[]
}

interface PostModel extends mongoose.Model<PostDoc> {
    build(atters: PostAttrs): PostDoc
}

interface PostDoc extends mongoose.Document {
    user: Types.ObjectId
    content: string
    image: string
    likes: string[]
    comments: string[]
    updatedAt: string;
}

const PostSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "User",
        },
        content: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
        ],
        hashtag:[],
    },
    { timestamps: true }
);

const PostModel = mongoose.model<PostDoc, PostModel>('post', PostSchema)
export { PostModel }