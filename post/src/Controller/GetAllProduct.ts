import { NextFunction, Request, Response } from "express";
import { IProductItractor } from "interface/IProdectIntractor";
import { inject, injectable } from "inversify";
import { PRODUCT_INTERFACE } from "../utils";

@injectable()
export class GetAllProduct {
    private intractor: IProductItractor
    constructor(
        @inject(PRODUCT_INTERFACE.ProductIntractor) intractor: IProductItractor
    ) {
        this.intractor = intractor
    }
    async OnGetallProdu(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.intractor.GetAllProduct()
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