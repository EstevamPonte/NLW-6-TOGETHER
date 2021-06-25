import { getCustomRepository } from "typeorm";
import { ComplimetsRepositories } from "../repositories/ComplimetsRepositories";

class ListUserSenderComplementsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimetsRepositories)
    
    const compliments = await complimentsRepository.find({
      where: {user_sender: user_id}
    })

    return compliments
  }
}

export { ListUserSenderComplementsService }