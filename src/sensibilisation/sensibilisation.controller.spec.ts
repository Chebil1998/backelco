import { Test, TestingModule } from '@nestjs/testing';
import { SensibilisationController } from './sensibilisation.controller';

describe('SensibilisationController', () => {
  let controller: SensibilisationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SensibilisationController],
    }).compile();

    controller = module.get<SensibilisationController>(SensibilisationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
