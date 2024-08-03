import { POST_INTERFACE } from "../utils"
import { IPostItractor } from "../interface/IPostIntractor"
import { inject, injectable } from "inversify"
import { NextFunction, Request, Response } from "express"

@injectable()
export class LikePost {
    private intractor: IPostItractor
    constructor(
        @inject(POST_INTERFACE.PostIntractor) intractor: IPostItractor
    ) {
        this.intractor = intractor
    }
    async OnLikePost(req: Request, res: Response, next: NextFunction) {
        const { userId, postId } = req.body
        console.log("userId:" + userId + " postId:" + postId);
        try {
            if (userId && postId) {
                await this.intractor.likePost(userId, postId)
                res.send({
                    success: true,
                    message: "success",
                })
            }
        } catch (error) {
            res.send({
                message: 'Server Eroor',
                success: false,
                error: error
            })
        }
    }
}