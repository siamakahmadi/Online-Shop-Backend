import { Application, Request, Response, Router } from 'express'
import userRouter from '../components/users/userRouter';
import productRouter from '../components/product/productRouter';

import RouteEngine from './router'

class RouteService {
    private app: Application;
    private router: RouteEngine;

    public constructor (app: Application) {
      this.app = app
      this.router = new RouteEngine()
      this.bindRouters()
    }

    public bindRouters () {
        this.router.registerRouter('/api/v1/users',userRouter)
        this.router.registerRouter('/api/v1/products',productRouter)

    }

    public run () {
      this.router.getRouters().forEach((router: Router, route: string) => {
        this.app.use(route, router)
      })
    }
}

export default RouteService
