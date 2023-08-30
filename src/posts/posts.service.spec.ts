import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { PostsRepository } from './posts.repository';

describe('PostsService', () => {
  let service: PostsService;
  let repository: PostsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService, PostsRepository],
    }).compile();

    service = module.get<PostsService>(PostsService);
    repository = module.get<PostsRepository>(PostsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPost', () => {
    it('should call repository', async () => {
      const post = { id: 1, title: 'test' };
      const spy = jest.spyOn(repository, 'findOneBy').mockResolvedValue(post);
      expect(await service.getPost(1)).toStrictEqual(post);
      expect(spy).toBeCalledWith(1);
    });
  });
});
