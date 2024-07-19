import express from 'express'
import { CreateProduct } from '../Controller/CreateProduct'
import { IProductRepositry } from '../interface/IProductRepositry'
import { IProductItractor } from '../interface/IProdectIntractor'
import { ProductIntractor } from '../Intractor/ProductIntractor'
import { Container } from 'inversify'
import { ProductRepositry } from '../Repositry/ProductRepositry'
import { PRODUCT_INTERFACE } from '../utils'
 
const container = new Container()

container  
    .bind<IProductRepositry>(PRODUCT_INTERFACE.ProductRepositry)
    .to(ProductRepositry)
container
    .bind<IProductItractor>(PRODUCT_INTERFACE.ProductIntractor)
    .to(ProductIntractor)
container 
    .bind(PRODUCT_INTERFACE.CreateProduct)
    .to(CreateProduct)

const createProd = container.get<CreateProduct>(PRODUCT_INTERFACE.CreateProduct)

const app = express.Router()

app.post('/createPost', createProd.OnCreateProduct.bind(createProd))

export default app