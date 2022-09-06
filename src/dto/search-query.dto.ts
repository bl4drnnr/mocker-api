import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchQueryDto {
  @ApiProperty({
    description: 'Search query',
    example: '/post/',
    required: false
  })
  @IsString()
  query: string;
}
