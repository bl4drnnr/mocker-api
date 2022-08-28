import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async findAll({ dates }: { dates: string }): Promise<User[]> {
    if (dates === 'true') {
      return this.userRepository.find();
    } else {
      return this.userRepository
        .createQueryBuilder('user')
        .select(['user.id', 'user.firstName', 'user.lastName'])
        .getMany();
    }
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async findByQuery(
    skip: number,
    take: number,
    count: string
  ): Promise<User[] | { rows: User[]; count: number }> {
    let options: FindManyOptions;

    if ((skip || take) && (!skip || !take))
      throw new HttpException(
        'skip and take must be provided together',
        HttpStatus.BAD_REQUEST
      );
    else options = { skip, take };

    if (count === 'true') {
      const [rows, count] = await this.userRepository.findAndCount(options);
      return { rows, count };
    }

    return this.userRepository.find(options);
  }
}
