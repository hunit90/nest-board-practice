import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

describe('PostsController', () => {
  let controller: PostsController;
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService],
    }).compile();

    controller = module.get<PostsController>(PostsController);
    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getPosts', () => {
    it('should call the service', async () => {
      const post = { id: 1, title: 'test posts' };
      const spy = jest.spyOn(service, 'getPost').mockResolvedValue(post);
      expect(await controller.getPost(1)).toStrictEqual(post);
      expect(spy).toBeCalledWith(1);
    });
  });
});
