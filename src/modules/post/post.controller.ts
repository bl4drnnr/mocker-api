import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get(':id')
  getOneById(@Param('id', ParseIntPipe) id: number) {
    return this.postService.findOne(id);
  }
}
