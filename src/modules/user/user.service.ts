import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async findByQuery(
    skip: number,
    take: number,
    count: string
  ): Promise<User[] | { rows: User[]; count: number }> {
    if (count === 'true') {
      const [rows, count] = await this.userRepository.findAndCount({
        skip,
        take
      });
      return { rows, count };
    }
    return this.userRepository.find({
      skip,
      take
    });
  }
}
