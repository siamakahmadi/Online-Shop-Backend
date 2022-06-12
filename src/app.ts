import * as express from 'express'
import { Application } from 'express'
import Router from './router'
import userRouter from './components/users/userRouter'

class App {
    public app: Application;
    public port: number;
    private router: Router;

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.router = new Router(this.app)
        this.registerRouters()
    }

    private registerRouters() {
        this.router.registerRouter('/api/v1/users', userRouter)
    }

    public start(): void {
        this.router.run()
        this.app.listen(this.port, () => {
            console.log(`app is running ${this.port}`)
        })
    }

}
export default App;