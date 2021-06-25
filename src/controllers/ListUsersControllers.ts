import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

class ListUsersControllers {
  async handle(req: Request, res: Response) {

    const listUsersServices = new ListUsersService()

    const users = await listUsersServices.execute()

    res.json(users)

  }
}

export {ListUsersControllers}