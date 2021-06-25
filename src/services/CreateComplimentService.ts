import { getCustomRepository, getRepository } from "typeorm"
import { ComplimetsRepositories } from "../repositories/ComplimetsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IComplimentRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

class CreateComplimentService {
  async execute ({ message, tag_id, user_receiver, user_sender }: IComplimentRequest) {
    const complimentsRepositorie = getCustomRepository(ComplimetsRepositories)
    const usersRepositories = getCustomRepository(UsersRepositories)

    if(user_sender === user_receiver) {
      throw new Error("Incorrect user receiver!")
    }

    const userReciverExists = await usersRepositories.findOne(user_receiver)

    if(!userReciverExists) {
      throw new Error("User Reciver does not exites!")
    }

    const compliment = complimentsRepositorie.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await complimentsRepositorie.save(compliment)

    return compliment
  }
}

export { CreateComplimentService}