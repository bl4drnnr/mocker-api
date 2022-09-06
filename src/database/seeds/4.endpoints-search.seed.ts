import { Factory, Seeder } from 'typeorm-seeding';
import { DataSource } from 'typeorm';
import { Endpoint } from '../../entities/endpoint.entity';

export default class EndpointsSearch implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Endpoint)
      .values([
        { name: '/user/list' },
        { name: '/user/:id' },
        { name: '/user?skip=&take=&count=' },
        { name: '/todo/list' },
        { name: '/todo/:id' },
        { name: '/todo?skip=&take=&count=' },
        { name: '/todo/:userId' },
        { name: '/post/list' },
        { name: '/post/:id' },
        { name: '/post?skip=&take=&count=' },
        { name: '/post/:userId' },
        { name: '/image/:width/:height' }
      ])
      .execute();
  }
}
