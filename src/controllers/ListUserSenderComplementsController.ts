import { Request, Response } from "express";
import { ListUserSenderComplementsService } from "../services/ListUserSenderComplementsServices";

class ListUserSenderComplementsController{

  async handle(req: Request, res: Response) {

    const { user_id } = req

    const listUserSendComplementsService = new ListUserSenderComplementsService()

    const compliments = await listUserSendComplementsService.execute(user_id)

    return res.json(compliments)

  }
}

export { ListUserSenderComplementsController }