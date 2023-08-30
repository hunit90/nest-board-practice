import { Injectable } from '@nestjs/common';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly repository: PostsRepository) {}
  async getPost(id: number): Promise<any> {
    return this.repository.findOneBy(id);
  }
}
