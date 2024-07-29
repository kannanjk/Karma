import { NextFunction, Request, Response } from "express";
import { IPostItractor } from "interface/IPostIntractor";
import { inject, injectable } from "inversify";
import { POST_INTERFACE } from "../utils";

@injectable()
export class GetAllPost {
    private intractor: IPostItractor
    constructor(
        @inject(POST_INTERFACE.PostIntractor) intractor: IPostItractor
    ) {
        this.intractor = intractor
    }
    async OnGetallPost(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.intractor.GetAllPost()
            if (data) {
                res.send({
                    message: "Prodect found",
                    success: true,
                    data: data
                })
            } else {
                res.send({
                    message: "somthing went error",
                    success: false,
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