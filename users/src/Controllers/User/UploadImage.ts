import { INTERFACE_TYPE } from "../../utils"
import { IUserInteractor } from "../../interfaces/userIntractor"
import { inject, injectable } from "inversify"
import { NextFunction, Request, Response } from "express"

@injectable()
export class UploadImage {
    private interector: IUserInteractor
    constructor(
        @inject(INTERFACE_TYPE.UserIntractor) interector: IUserInteractor
    ) { 
        this.interector = interector
    } 
    async OnUploadImage(req: Request, res: Response, next: NextFunction) {
        const data = req.file
        try {
            const upload = await this.interector.uploadImage(data)
        } catch (error) {
            console.log(error);
        }
    }
}