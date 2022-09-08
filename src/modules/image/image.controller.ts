import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ImageService } from './image.service';

@ApiTags('Images')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get(':width/:height')
  getImage(
    @Param('width', ParseIntPipe) width: number,
    @Param('height', ParseIntPipe) height: number
  ) {
    return this.imageService.getImage({ width, height });
  }
}
