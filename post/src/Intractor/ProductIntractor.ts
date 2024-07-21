import { IProductRepositry } from "../interface/IProductRepositry";
import { IProductItractor } from "../interface/IProdectIntractor";
import { inject, injectable } from "inversify";
import { PRODUCT_INTERFACE } from "../utils";

@injectable()
export class ProductIntractor implements IProductItractor {
    private repositry: IProductRepositry
    constructor(
        @inject(PRODUCT_INTERFACE.ProductRepositry) repositry: IProductRepositry
    ) {
        this.repositry = repositry
    }
    createProduct(input: any) {
        return this.repositry.CreateProduct(input)
    }
  GetAllProduct() {
      return this.repositry.GetAllProducts()
  }
  GetOneProduct(input: any) {
    return this.repositry.getOneProduct(input)
}
}