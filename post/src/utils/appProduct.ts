import { CreateProduct } from "Controller/CreateProduct";
import { ProductIntractor } from "Intractor/ProductIntractor";
import { ProductRepositry } from "Repositry/ProductRepositry";

export const PRODUCT_INTERFACE = {
    ProductRepositry: Symbol.for("ProductRepositry"),
    ProductIntractor: Symbol.for("ProductIntractor"),
    CreateProduct: Symbol.for("CreateProduct")
}