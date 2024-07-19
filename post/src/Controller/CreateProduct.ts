import { NextFunction, Request, Response } from "express";
import { IProductItractor } from "../interface/IProdectIntractor";
import { inject, injectable } from "inversify";
import { PRODUCT_INTERFACE } from "../utils";

@injectable()
export class CreateProduct {
    private intractor: IProductItractor
    constructor(
        @inject(PRODUCT_INTERFACE.ProductIntractor) intractor: IProductItractor
    ) {
        this.intractor = intractor
    }
    async OnCreateProduct(req: Request, res: Response, next: NextFunction) {
        const body = req.body
        try {
            const data = await this.intractor.createProduct(body)
            if (data) {
                res.send({
                    message: "Prodect added!",
                    success: true,
                    data:data
                })
            } else {
                res.send({
                    message: 'Product not added',
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