import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { TodoModule } from './modules/todo/todo.module';
import { typeOrmAsyncConfig } from './database/typeorm.config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration]
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    PostModule,
    UserModule,
    TodoModule
  ]
})
export class AppModule {}
