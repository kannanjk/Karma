import { Post } from "app/entity";
import { IPostRepositry } from "interface/IPostRepositry";
import { PostModel } from '../app/Database/PostSchema/PostModel'
import { injectable } from "inversify";

@injectable()
export class PostRepositry implements IPostRepositry {
    async CreatePost(input: Post): Promise<Post> {

        const pro = new PostModel(input)
        const data = await pro.save()
        console.log(data);
        return data

    }
    async GetAllPosts(): Promise<Post[]> {
        const data = await PostModel.find()
        if (data) {
            return data
        }
    }
    async getOnePost(input: Post): Promise<Post[]> {
        const data = await PostModel.find({ user: input })
        return data
    }
} 