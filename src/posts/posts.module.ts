import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsRepository } from './posts.repository';

@Module({
  controllers: [PostsController],
  imports: [TypeOrmModule.forFeature([PostsRepository])],
  providers: [PostsService, PostsRepository],
})
export class PostsModule {}
