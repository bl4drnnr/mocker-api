import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { TodoModule } from './modules/todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Post]
    }),
    PostModule,
    UserModule,
    TodoModule
  ]
})
export class AppModule {}
