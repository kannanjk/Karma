import mongoose, { Types } from "mongoose";

interface PostAttrs {
    user: Types.ObjectId
    content: string
    image: string
    likes: number[]
    comments: number[]
    hashtag: string[]
}

interface PostModel extends mongoose.Model<PostDoc> {
    build(atters: PostAttrs): PostDoc
}

interface PostDoc extends mongoose.Document {
    user: Types.ObjectId
    content: string
    image: string
    likes: number[]
    comments: string[]
    hashtag: string[]
    updatedAt: string;
}

const PostSchema = new mongoose.Schema(
    {
        user: {
            type: Number,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
        image: {
            type: String,
            require: true,
        },
        likes: [],
        comments: [],
        hashtag: [],
    },
    {
        timestamps: {
            createdAt: 'created_at', 
            updatedAt: 'updated_at' 
        }
    }
);

const PostModel = mongoose.model<PostDoc, PostModel>('post', PostSchema)
export { PostModel }