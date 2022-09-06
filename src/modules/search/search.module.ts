import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Endpoint } from '../../entities/endpoint.entity';

@Module({
  controllers: [SearchController],
  providers: [SearchService],
  imports: [TypeOrmModule.forFeature([Endpoint])]
})
export class SearchModule {}
