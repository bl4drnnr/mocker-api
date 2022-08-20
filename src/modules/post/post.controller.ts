import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as PostEntity } from '../../entities/post.entity';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  findAll(): Promise<PostEntity[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  getOneById(@Param('id', ParseIntPipe) id: number): Promise<PostEntity> {
    return this.postService.findOne(id);
  }

  @Get()
  findByQuery(
    @Query('skip', ParseIntPipe) skip: number,
    @Query('take', ParseIntPipe) take: number
  ): Promise<PostEntity[]> {
    return this.postService.findByQuery(skip, take);
  }
}
