import { Test, TestingModule } from '@nestjs/testing';
import { ProjectSecurityService } from './project_security.service';

describe('ProjectSecurityService', () => {
  let service: ProjectSecurityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectSecurityService],
    }).compile();

    service = module.get<ProjectSecurityService>(ProjectSecurityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
