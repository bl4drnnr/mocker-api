import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class QueryDto {
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  skip: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  take: number;

  @Transform(({ value }) => {
    return value === 'true';
  })
  @IsOptional()
  @IsBoolean()
  count?: boolean;
}
