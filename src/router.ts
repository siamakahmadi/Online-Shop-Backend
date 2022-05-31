import { Application, Request, Response } from "express";

class Router {
    private app: Application;

    constructor(app: Application) {
        this.app = app
    }

    public run(): void {
        this.app.get('/api/v1/users', (req: Request, res: Response) => {
            res.send({ success: true })
        })
    }
}

export default Router