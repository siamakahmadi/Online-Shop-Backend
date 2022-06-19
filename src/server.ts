import App from './app';
import '../src/infrastructure/connection/mongoose'

const port: number = 5000;

const Application = new App(port)
Application.start();