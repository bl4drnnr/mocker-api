import { Transform } from 'class-transformer';
import { IsBooleanString, IsNumber, IsOptional } from 'class-validator';

export class QueryDto {
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  skip: number;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  take: number;

  @IsOptional()
  @IsBooleanString()
  count?: string;
}
