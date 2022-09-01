import { IsBoolean, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class DatesDto {
  @ApiProperty({
    description:
      'Optional boolean params that allows to return records with createdAt and updatedAt fields',
    example: new Date(),
    required: false
  })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  dates?: boolean;
}
