import { Post } from "app/entity";
import { IPostRepositry } from "../interface/IPostRepositry";
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

    async likePost(userId: number, postId: any) {
        // console.log("userId:" + userId + "postId" + postId);
        const post = await PostModel.findById(postId)

        if (!post.likes.includes(userId)) {
            const up = await post.updateOne({
                $push: {
                    likes: userId
                }
            })
            console.log(up);
            return
        } else {
            const up = await post.updateOne({
                $pull: {
                    likes: userId
                }
            })
            console.log(up);
            return
        }
    }
} 