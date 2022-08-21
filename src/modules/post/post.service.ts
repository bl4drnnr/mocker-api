import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../../entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>
  ) {}

  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  findOne(id: number): Promise<Post> {
    return this.postRepository.findOneBy({ id });
  }

  async findByQuery(
    skip: number,
    take: number,
    count: string
  ): Promise<Post[] | { rows: Post[]; count: number }> {
    if (count === 'true') {
      const [rows, count] = await this.postRepository.findAndCount({
        skip,
        take
      });
      return { rows, count };
    }
    return this.postRepository.find({
      skip,
      take
    });
  }
}
