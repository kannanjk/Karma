import { Post } from "app/entity";

export interface IPostRepositry { 
    CreatePost(input: Post): Promise<Post>
    GetAllPosts(): Promise<Post[]>
    getOnePost(input: Post): Promise<Post[]>
}