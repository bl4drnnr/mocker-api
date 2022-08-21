import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '../../entities/todo.entity';
import { QueryDto } from '../../dto/query.dto';

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
    @Query() { skip, take, count }: QueryDto
  ): Promise<Todo[] | { rows: Todo[]; count: number }> {
    return this.todoService.findByQuery(skip, take, count);
  }
}
