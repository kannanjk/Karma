export interface ProductsData {
    title: string
    description: string
    stock: number
    price: number
    image: string
}

export class Product {
    title: string
    description: string
    stock: number
    price: number
    image: string

    constructor({ title, description, stock, price, image }: ProductsData) {
        this.title = title
        this.description = description
        this.stock = stock
        this.price = price
        this.image = image
    }
}