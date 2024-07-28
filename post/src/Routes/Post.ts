import express from 'express'
import { CreateProduct } from '../Controller/CreatePost'
import { IProductRepositry } from '../interface/IPostRepositry'
import { IProductItractor } from '../interface/IPostIntractor'
import { ProductIntractor } from '../Intractor/PostIntractor'
import { Container } from 'inversify'
import { ProductRepositry } from '../Repositry/PostRepositry'
import { PRODUCT_INTERFACE } from '../utils'
import { GetAllProduct } from '../Controller/GetAllPost'

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
app.get('/getAllPost', getAllpro.OnGetallProdu.bind(getAllpro))

export default app