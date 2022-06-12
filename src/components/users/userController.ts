import { Request, Response } from "express";

class UserController {
    constructor() {

    }

    public index(res: Response, req: Request) {
        res.send({ allUsers: [] })
    }
}


export default UserController;