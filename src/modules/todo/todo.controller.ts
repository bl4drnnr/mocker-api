import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '../../entities/todo.entity';
import { QueryDto } from '../../dto/query.dto';
import { DatesDto } from '../../dto/dates.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Todos')
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @ApiOperation({ summary: 'Returns list of all todos' })
  @ApiResponse({ status: 200, type: [Todo] })
  @Get('list')
  findAll(@Query() { dates }: DatesDto): Promise<Todo[]> {
    return this.todoService.findAll({ dates });
  }

  @ApiOperation({ summary: 'Returns one todo by id' })
  @ApiResponse({ status: 200, type: Todo })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @ApiOperation({
    summary: 'Returns todos by query params - skip, take and count'
  })
  @ApiResponse({ status: 200, type: [Todo] })
  @Get()
  findByQuery(
    @Query() { skip, take, count }: QueryDto
  ): Promise<Todo[] | { rows: Todo[]; count: number }> {
    return this.todoService.findByQuery(skip, take, count);
  }

  @ApiOperation({
    summary: "Returns user's todos by user id"
  })
  @ApiResponse({ status: 200, type: [Todo] })
  @Get('user/:userId')
  getUserTodos(@Param('userId', ParseIntPipe) userId: number): Promise<Todo[]> {
    return this.todoService.getUserTodos(userId);
  }
}
