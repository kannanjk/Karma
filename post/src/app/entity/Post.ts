import { Types } from 'mongoose';

export interface PostData {
    user: Types.ObjectId
    content: string
    image: string
    likes: string[]
    comments: string[]
    updatedAt: string;
}

export class Post {
    user: Types.ObjectId
    content?: string
    image?: string
    likes: string[]
    comments: string[]
    updatedAt: string;

    constructor({ user, content,comments,image,likes }: PostData) {
        this.user = user
        this.content = content
        this.comments = comments
        this.likes = likes
        this.image = image
    }
}