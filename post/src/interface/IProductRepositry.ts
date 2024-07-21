import { Product } from "app/entity";

export interface IProductRepositry {
    CreateProduct(input: Product): Promise<Product>
    GetAllProducts(): Promise<Product[]>
    getOneProduct(input: Product): Promise<Product>
}