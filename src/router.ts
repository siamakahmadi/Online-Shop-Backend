import { Application, Request, Response, Router } from "express";
class RouteEngine {
    private app: Application;
    private routers: Map<string, Router> = new Map<string, Router>()
    constructor(app: Application) {
        this.app = app
    }

    public registerRouter(route: string, router: Router) {
        this.routers.set(route, router);
    }

    public run(): void {

        this.routers.forEach((router: Router, route: string) => {
            this.app.use(route, router);
        })

    }
}

export default RouteEngine;