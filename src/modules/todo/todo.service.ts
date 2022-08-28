import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../../entities/todo.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOneBy({ id });
  }

  async findByQuery(
    skip: number,
    take: number,
    count: boolean
  ): Promise<Todo[] | { rows: Todo[]; count: number }> {
    let options: FindManyOptions;

    if ((skip || take) && (!skip || !take))
      throw new HttpException(
        'skip and take must be provided together',
        HttpStatus.BAD_REQUEST
      );
    else options = { skip, take };

    if (count) {
      const [rows, count] = await this.todoRepository.findAndCount(options);
      return { rows, count };
    }

    return this.todoRepository.find(options);
  }
}
