import { Test, TestingModule } from '@nestjs/testing';
import { SensibilisationService } from './sensibilisation.service';

describe('SensibilisationService', () => {
  let service: SensibilisationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SensibilisationService],
    }).compile();

    service = module.get<SensibilisationService>(SensibilisationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
