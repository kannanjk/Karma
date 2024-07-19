import express from 'express'
import { CreateProduct } from '../Controller/CreateProduct'
import { IProductRepositry } from '../interface/IProductRepositry'
import { IProductItractor } from '../interface/IProdectIntractor'
import { ProductIntractor } from '../Intractor/ProductIntractor'
import { Container } from 'inversify'
import { ProductRepositry } from '../Repositry/ProductRepositry'
import { PRODUCT_INTERFACE } from '../utils'
import { GetAllProduct } from '../Controller/GetAllProduct'

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
container
    .bind(PRODUCT_INTERFACE.GetAllProduct)
    .to(GetAllProduct)

const createProd = container.get<CreateProduct>(PRODUCT_INTERFACE.CreateProduct)
const getAllpro = container.get<GetAllProduct>(PRODUCT_INTERFACE.GetAllProduct)

const app = express.Router()

app.post('/createPost', createProd.OnCreateProduct.bind(createProd))
app.get('/getAllProduct', getAllpro.OnGetallProdu.bind(getAllpro))

export default app