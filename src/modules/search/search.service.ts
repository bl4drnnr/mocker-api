import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Endpoint } from '../../entities/endpoint.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Endpoint) private endpointRepository: Repository<Endpoint>
  ) {}

  async search({ query }: { query: string }): Promise<Endpoint[]> {
    return await this.endpointRepository.findBy({
      name: ILike(`%${query}%`)
    });
  }
}
