import { Router } from 'express'
import ProductController from './productController'
const controller = new ProductController()
const productRouter: Router = Router()

productRouter.get('/', controller.index)
productRouter.post('/', controller.create)

export default productRouter
