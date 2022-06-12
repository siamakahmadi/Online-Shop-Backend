import { Request, Response } from 'express'

class UsersController {
  constructor () {
    this.index = this.index.bind(this)
  }

  public async index (req: Request, res: Response) {
    res.send({allUsers:[]})
  }

  
}

export default UsersController
