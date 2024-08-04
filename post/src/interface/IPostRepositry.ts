import { Post ,comment} from "app/entity";

export interface IPostRepositry {
    CreatePost(input: Post): Promise<Post>
    GetAllPosts(): Promise<Post[]>
    getOnePost(input: Post): Promise<Post[]>
    likePost(userId: number, postId: any): any
    CreateComment(input:any): Promise<comment>
    getPost(input:any): Promise<Post>
    getComment(input:any):Promise<comment[]>
}