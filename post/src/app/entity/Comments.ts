import { Types } from 'mongoose';

export interface CommentData {
    content: string,
    postId: any
    userId: number
    likes: number[]
    replay: number[]
    updatedAt: string;
}

export class comment{
    content: string
    postId: any
    userId: number
    likes?: number[]
    replay?: number[]
    updatedAt: string;

    constructor({postId,userId,content,likes,replay}:CommentData){
        this.userId =userId
        this.postId = postId
        this.content = content
        this.likes = likes
        this.replay = replay
    }
}