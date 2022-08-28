import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from '../../entities/post.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>
  ) {}

  async findAll({ dates }: { dates: boolean }): Promise<Post[]> {
    const posts = await this.postRepository.find({
      relations: {
        user: true
      },
      select: {
        id: true,
        title: true,
        content: true,
        preview: true,
        createdAt: dates,
        updatedAt: dates,
        user: {
          id: true
        }
      }
    });

    return posts.map((item) => {
      item['userId'] = item.user.id;
      delete item.user;
      return item;
    });
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

  async getUserPosts(userId: number): Promise<Post[]> {
    const posts = await this.postRepository.find({
      relations: {
        user: true
      },
      where: {
        user: {
          id: userId
        }
      },
      select: {
        id: true,
        title: true,
        content: true,
        preview: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return posts.map((item) => {
      delete item.user;
      return item;
    });
  }
}
