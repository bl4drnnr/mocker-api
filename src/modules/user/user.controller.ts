import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';
import { QueryDto } from '../../dto/query.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('list')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  getOneById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Get()
  findByQuery(
    @Query() { skip, take, count }: QueryDto
  ): Promise<User[] | { rows: User[]; count: number }> {
    return this.userService.findByQuery(skip, take, count);
  }
}
