import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class QueryDto {
  @Transform(({ value: skip }) => parseInt(skip))
  @IsNumber()
  skip: number;

  @Transform(({ value: take }) => parseInt(take))
  @IsNumber()
  take: number;

  @Transform(({ value: count }) => count === 'true')
  @IsOptional()
  @IsBoolean()
  count?: boolean;
}
