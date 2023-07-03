import { Test, TestingModule } from '@nestjs/testing';
import { ChangeManagementService } from './change_management.service';

describe('ChangeManagementService', () => {
  let service: ChangeManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChangeManagementService],
    }).compile();

    service = module.get<ChangeManagementService>(ChangeManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
