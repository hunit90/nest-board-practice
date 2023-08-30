import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly service: PostsService) {}
  @Get(`/:id`)
  async getPost(@Param('id') id: number) {
    return await this.service.getPost(id);
  }
}
