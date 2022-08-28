import { IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

export class DatesDto {
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  dates?: boolean;
}
