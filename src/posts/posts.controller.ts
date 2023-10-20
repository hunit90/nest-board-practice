import { Controller, Get, Param, Post } from "@nestjs/common";
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly service: PostsService) {}
  @Get(`/:id`)
  async getPost(@Param('id') id: number) {
    return await this.service.getPost(id);
  }

  @Post('/')
  async createPost() {
    return await this.service.createPost();
  }
}
