import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { Post, Post as PostEntity } from '../../entities/post.entity';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('list')
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
    @Query('take', ParseIntPipe) take: number,
    @Query('count') count?: boolean
  ): Promise<Post[] | { rows: Post[]; count: number }> {
    return this.postService.findByQuery(skip, take, count);
  }
}
