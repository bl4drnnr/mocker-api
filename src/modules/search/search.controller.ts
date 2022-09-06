import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchQueryDto } from '../../dto/search-query.dto';
import { Endpoint } from '../../entities/endpoint.entity';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';
import { BasicAuth } from '../../guards/basic-auth.guard';

@ApiBasicAuth()
@Controller('search')
@ApiTags('Search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @UseGuards(BasicAuth)
  @Get()
  search(@Query() { query }: SearchQueryDto): Promise<Endpoint[]> {
    return this.searchService.search({ query });
  }
}
