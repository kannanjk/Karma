import { NextFunction, Request, Response } from "express";
import { IPostItractor } from "../interface/IPostIntractor";
import { inject, injectable } from "inversify";
import { POST_INTERFACE } from "../utils";

@injectable()
export class CreatePost {
    private intractor: IPostItractor
    constructor(
        @inject(POST_INTERFACE.PostIntractor) intractor: IPostItractor
    ) {
        this.intractor = intractor
    }
    async OnCreatePost(req: Request, res: Response, next: NextFunction) {
        const body = req.body
        try {
            const data = await this.intractor.createPost(body)
            if (data) {
                res.send({
                    message: "Post created!",
                    success: true,
                    data:data
                })
            } else {
                res.send({
                    message: 'Post not added',
                    success: false,
                    data:data.error
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