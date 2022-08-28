import {IsBooleanString, IsOptional} from "class-validator";

export class DatesDto {
  @IsOptional()
  @IsBooleanString()
  dates: string;
}
