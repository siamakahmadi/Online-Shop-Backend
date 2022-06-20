import { Request, Response } from 'express'
import Product from './model/Product'

class ProductController {
  constructor() {
    this.index = this.index.bind(this)
  }

  public async index(req: Request, res: Response) {
    res.send({ allProduct: [] })
  }

  public async create(req: Request, res: Response) {
    const newProduct = Product.create({
        title: 'testProduct',
        price: '23$',
        salePrice: 23,
        thumbnail: 'helloThumbnail',
        gallery: 'test',
    })

    res.send({ newProduct })
  }
}

export default ProductController
