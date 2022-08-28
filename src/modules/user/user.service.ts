import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async findAll({ dates }: { dates: boolean }): Promise<User[]> {
    const withDates = [];
    if (dates) withDates.push('');

    return await this.userRepository.find({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        createdAt: dates,
        updatedAt: dates
      }
    });
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async findByQuery(
    skip: number,
    take: number,
    count: boolean
  ): Promise<User[] | { rows: User[]; count: number }> {
    let options: FindManyOptions;

    if ((skip || take) && (!skip || !take))
      throw new HttpException(
        'skip and take must be provided together',
        HttpStatus.BAD_REQUEST
      );
    else options = { skip, take };

    if (count) {
      const [rows, count] = await this.userRepository.findAndCount(options);
      return { rows, count };
    }

    return this.userRepository.find(options);
  }
}
