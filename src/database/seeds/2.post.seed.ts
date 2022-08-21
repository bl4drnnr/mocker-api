import { Factory, Seeder } from 'typeorm-seeding';
import { DataSource } from 'typeorm';
import { Post } from '../../entities/post.entity';

export default class CreatePosts implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Post)
      .values([
        { title: 't1', content: 'c1', preview: 'p1', user: () => '1' },
        { title: 't2', content: 'c2', preview: 'p2', user: () => '2' },
        { title: 't3', content: 'c3', preview: 'p3', user: () => '3' },
        { title: 't4', content: 'c4', preview: 'p4', user: () => '4' },
        { title: 't5', content: 'c5', preview: 'p5', user: () => '5' },
        { title: 't6', content: 'c6', preview: 'p6', user: () => '6' }
      ])
      .execute();
  }
}
