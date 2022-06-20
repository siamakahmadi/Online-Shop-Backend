import { Request, Response } from 'express'
import User from './model/User'

class UsersController {
  constructor() {
    this.index = this.index.bind(this)
  }

  public async index(req: Request, res: Response) {
    res.send({ allUsers: {} })
  }

  public async create(req: Request, res: Response) {
    const newUser = User.create({
        firstName: 'Siamak',
        lastName: 'Ahmadi',
        emial: 'siamak@gmail.com',
        mobile: '09175293160'
    }
    )

    res.send({ newUser })
  }
}

export default UsersController
