import { IsBoolean, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class DatesDto {
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  dates?: boolean;
}
