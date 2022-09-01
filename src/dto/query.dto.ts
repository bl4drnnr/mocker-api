import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class QueryDto {
  @ApiProperty({
    description:
      'Optional param that allows to skip records (only with skip param)',
    example: 3,
    required: false
  })
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsNumber()
  skip?: number;

  @ApiProperty({
    description:
      'Optional param that allows to take certain quantity of records (only with skip param)',
    example: 5,
    required: false
  })
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsNumber()
  take?: number;

  @ApiProperty({
    description:
      'Optional boolean param that allows to return records with their quantity',
    example: true,
    required: false
  })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  count?: boolean;
}
