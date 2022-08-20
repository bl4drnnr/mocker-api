import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  getOneById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
}
