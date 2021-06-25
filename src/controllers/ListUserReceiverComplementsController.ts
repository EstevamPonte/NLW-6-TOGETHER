import { Request, Response } from "express";
import { ListUserReceiverComplementsService } from "../services/ListUserReceiverComplementsServices";

class ListUserReceiverComplementsController{

  async handle(req: Request, res: Response) {

    const { user_id } = req

    const listUserReceiverComplementsService = new ListUserReceiverComplementsService()

    const compliments = await listUserReceiverComplementsService.execute(user_id)

    return res.json(compliments)

  }
}

export { ListUserReceiverComplementsController }