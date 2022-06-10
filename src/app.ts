import * as express from 'express'
import { Application } from 'express'
import Router from './router'
class App {
    public app: Application;
    public port: number;
    private router: Router;

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.router = new Router(this.app)
        this.router.run();
    }

    public start():void{
        this.app.listen(this.port,()=>{
            console.log(`app is running ${this.port}`)
        })
    }


}
export default App;