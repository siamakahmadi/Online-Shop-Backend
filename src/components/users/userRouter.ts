import { Router } from 'express'
import UsersController from './userController'
const controller = new UsersController()
const usersRouter: Router = Router()

usersRouter.get('/', controller.index)
usersRouter.post('/', controller.create)

export default usersRouter
