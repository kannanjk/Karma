import mongoose, { mongo, Types } from "mongoose";

interface PostAttrs {
    user: Types.ObjectId
    content: string
    image: string
    likes: string[]
    comments: string[]
    hashtag:string[]
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
    hashtag:string[]
    updatedAt: string;
}

const PostSchema = new mongoose.Schema(
    {
        user: {
            type:Number,
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
        hashtag:[],
    },
    { timestamps: true }
);

const PostModel = mongoose.model<PostDoc, PostModel>('post', PostSchema)
export { PostModel }