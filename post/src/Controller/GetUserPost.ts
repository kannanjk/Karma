import { NextFunction, Request, Response } from "express";
import { IPostItractor } from "../interface/IPostIntractor";
import { inject, injectable } from "inversify";
import { POST_INTERFACE } from "../utils";

@injectable()
export class GetonePost {
    private intractor: IPostItractor
    constructor(
        @inject(POST_INTERFACE.PostIntractor) intractor: IPostItractor
    ) {
        this.intractor = intractor
    }
    async OnGetUserProduct(req: Request, res: Response, next: NextFunction) {
        const {user} = req.body
        
        try {
            const data = await this.intractor.GetOnePost(user)
            if (data) {  
                res.send({
                    success: true,
                    message: "user Post found", 
                    data: data
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