import { Test, TestingModule } from '@nestjs/testing';
import { ProjectSecurityController } from './project_security.controller';

describe('ProjectSecurityController', () => {
  let controller: ProjectSecurityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectSecurityController],
    }).compile();

    controller = module.get<ProjectSecurityController>(ProjectSecurityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
