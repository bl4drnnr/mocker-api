import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class QueryDto {
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsNumber()
  skip?: number;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsNumber()
  take?: number;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  count?: boolean;
}
