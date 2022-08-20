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
}
