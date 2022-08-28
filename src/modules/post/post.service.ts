import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../../entities/post.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>
  ) {}

  findAll({ dates }: { dates: boolean }): Promise<Post[]> {
    if (!dates)
      return this.postRepository
        .createQueryBuilder('post')
        .select(['post.id', 'post.title', 'post.content', 'post.preview'])
        .getMany();
    return this.postRepository.find();
  }

  findOne(id: number): Promise<Post> {
    return this.postRepository.findOneBy({ id });
  }

  async findByQuery(
    skip: number,
    take: number,
    count: boolean
  ): Promise<Post[] | { rows: Post[]; count: number }> {
    let options: FindManyOptions;

    if ((skip || take) && (!skip || !take))
      throw new HttpException(
        'skip and take must be provided together',
        HttpStatus.BAD_REQUEST
      );
    else options = { skip, take };

    if (count) {
      const [rows, count] = await this.postRepository.findAndCount(options);
      return { rows, count };
    }

    return this.postRepository.find(options);
  }
}
