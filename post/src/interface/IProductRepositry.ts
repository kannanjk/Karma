import { Product } from "app/entity";

export interface IProductRepositry {
    CreateProduct(input: Product): Promise<Product>
}