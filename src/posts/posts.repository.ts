import { DataSource, Repository } from 'typeorm';
import { Post } from './entities/posts.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsRepository extends Repository<Post> {
  constructor(dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  async getPost(id: number) {
    return await this.findOneBy({ id: id });
  }
}
