import { IPostRepositry } from "../interface/IPostRepositry";
import { IPostItractor } from "../interface/IPostIntractor";
import { inject, injectable } from "inversify";
import { POST_INTERFACE } from "../utils";

@injectable()
export class PostIntractor implements IPostItractor {
    private repositry: IPostRepositry
    constructor(
        @inject(POST_INTERFACE.PostRepositry) repositry: IPostRepositry
    ) {
        this.repositry = repositry
    }
    createPost(input: any) {
        return this.repositry.CreatePost(input)
    }
    GetAllPost() {
        return this.repositry.GetAllPosts()
    }
    GetOnePost(input: any) {
        return this.repositry.getOnePost(input)
    }
    likePost(userId: any, postId: any) {
        return this.repositry.likePost(userId, postId)
    }
}