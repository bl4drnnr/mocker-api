import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../../entities/todo.entity';
import { Repository } from 'typeorm';

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
    count: string
  ): Promise<Todo[] | { rows: Todo[]; count: number }> {
    if (count === 'true') {
      const [rows, count] = await this.todoRepository.findAndCount({
        skip,
        take
      });
      return { rows, count };
    }
    return this.todoRepository.find({
      skip,
      take
    });
  }
}
