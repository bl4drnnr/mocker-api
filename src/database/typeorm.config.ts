import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions
} from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: configService.get('DB_HOST'),
      port: Number(configService.get('DB_PORT')),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true
    };
  }
};
