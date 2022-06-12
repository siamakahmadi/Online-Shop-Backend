import { Router } from "express";
import UserController from './userController'

const userControllerInctance = new UserController()

const Userrouter: Router = Router();

Userrouter.get('/', userControllerInctance.index)

export default Userrouter;