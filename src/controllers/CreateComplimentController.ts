import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {

  async handle(req: Request, res: Response) {
    const {tag_id, user_receiver, message} = req.body
    const { user_id } = req
    
    const createComplimetService = new CreateComplimentService()

    const compliment = await createComplimetService.execute({
      tag_id,
      user_receiver,
      user_sender: user_id,
      message
    })

    return res.json(compliment)
  }

}

export {CreateComplimentController}