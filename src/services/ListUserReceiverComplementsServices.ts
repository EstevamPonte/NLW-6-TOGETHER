import { getCustomRepository } from "typeorm";
import { ComplimetsRepositories } from "../repositories/ComplimetsRepositories";

class ListUserReceiverComplementsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimetsRepositories)
    
    const compliments = await complimentsRepository.find({
      where: {
        user_receiver: user_id
      },
      relations: ["userSender", "userReciver", "tag"]
    })

    return compliments
  }
}

export { ListUserReceiverComplementsService }