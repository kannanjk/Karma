import { NextFunction, Request, Response } from "express";
import { IProductItractor } from "interface/IProdectIntractor";
import { inject, injectable } from "inversify";
import { PRODUCT_INTERFACE } from "utils";

@injectable()
export class GetonePro{
    private intractor: IProductItractor
    constructor(
        @inject(PRODUCT_INTERFACE.ProductIntractor) intractor: IProductItractor
    ) {
        this.intractor = intractor
    }
    async OnGetOneProduct (req: Request, res: Response, next: NextFunction) {
        const {id}= req.body
        try {
           const data=await this.intractor.GetOneProduct(id)
           if (data) {
            
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