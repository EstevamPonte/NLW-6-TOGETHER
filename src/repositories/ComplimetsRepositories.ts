import { EntityRepository, Repository } from 'typeorm'
import { Compliment } from '../entities/Compliment';

@EntityRepository(Compliment)
class ComplimetsRepositories extends Repository<Compliment> {
  
}

export {ComplimetsRepositories}