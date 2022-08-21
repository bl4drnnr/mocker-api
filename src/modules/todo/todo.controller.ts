import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '../../entities/todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('list')
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Get()
  findByQuery(
    @Query('skip', ParseIntPipe) skip: number,
    @Query('take', ParseIntPipe) take: number,
    @Query('count') count: boolean
  ): Promise<Todo[] | { rows: Todo[]; count: number }> {
    return this.todoService.findByQuery(skip, take, count);
  }
}
