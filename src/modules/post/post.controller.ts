import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from '../../entities/post.entity';
import { QueryDto } from '../../dto/query.dto';
import { DatesDto } from '../../dto/dates.dto';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @ApiProperty({ description: 'Returns list of all users' })
  @ApiResponse({ status: 200, type: [PostEntity] })
  @Get('list')
  findAll(@Query() { dates }: DatesDto): Promise<PostEntity[]> {
    return this.postService.findAll({ dates });
  }

  @ApiProperty({ description: 'Returns one post by id' })
  @ApiResponse({ status: 200, type: PostEntity })
  @Get(':id')
  getOneById(@Param('id', ParseIntPipe) id: number): Promise<PostEntity> {
    return this.postService.findOne(id);
  }

  @ApiProperty({
    description: 'Returns list of posts by query params - skip, take and count'
  })
  @ApiResponse({ status: 200, type: [PostEntity] })
  @Get()
  findByQuery(
    @Query() { skip, take, count }: QueryDto
  ): Promise<PostEntity[] | { rows: PostEntity[]; count: number }> {
    return this.postService.findByQuery(skip, take, count);
  }

  @ApiProperty({ description: "Returns user's posts by user id" })
  @ApiResponse({ status: 200, type: [PostEntity] })
  @Get('user/:userId')
  getUserPosts(
    @Param('userId', ParseIntPipe) userId: number
  ): Promise<PostEntity[]> {
    return this.postService.getUserPosts(userId);
  }
}
