import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchQueryDto } from '../../dto/search-query.dto';
import { Endpoint } from '../../entities/endpoint.entity';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  search(@Query() { query }: SearchQueryDto): Promise<Endpoint[]> {
    return this.searchService.search({ query });
  }
}
