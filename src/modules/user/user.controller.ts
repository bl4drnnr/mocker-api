import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';
import { QueryDto } from '../../dto/query.dto';
import { DatesDto } from '../../dto/dates.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Returns list of all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Get('list')
  findAll(@Query() { dates }: DatesDto): Promise<User[]> {
    return this.userService.findAll({ dates });
  }

  @ApiOperation({ summary: 'Returns one user by id' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  getOneById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @ApiOperation({
    summary: 'Returns users by query params - skip, take and count'
  })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  findByQuery(
    @Query() { skip, take, count }: QueryDto
  ): Promise<User[] | { rows: User[]; count: number }> {
    return this.userService.findByQuery(skip, take, count);
  }
}
