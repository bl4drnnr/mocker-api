import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageService {
  async getImage({ width, height }: { width: number; height: number }) {
    //
  }
}
