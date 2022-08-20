import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';
import { Todo } from './entities/todo.entity';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { TodoModule } from './modules/todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mocker',
      entities: [User, Post, Todo],
      synchronize: true
    }),
    PostModule,
    UserModule,
    TodoModule
  ]
})
export class AppModule {}
