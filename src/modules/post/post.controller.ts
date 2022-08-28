import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { Post, Post as PostEntity } from '../../entities/post.entity';
import { QueryDto } from '../../dto/query.dto';
import { DatesDto } from '../../dto/dates.dto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('list')
  findAll(@Query() { dates }: DatesDto): Promise<PostEntity[]> {
    return this.postService.findAll({ dates });
  }

  @Get(':id')
  getOneById(@Param('id', ParseIntPipe) id: number): Promise<PostEntity> {
    return this.postService.findOne(id);
  }

  @Get()
  findByQuery(
    @Query() { skip, take, count }: QueryDto
  ): Promise<Post[] | { rows: Post[]; count: number }> {
    return this.postService.findByQuery(skip, take, count);
  }
}
