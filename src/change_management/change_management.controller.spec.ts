import { Test, TestingModule } from '@nestjs/testing';
import { ChangeManagementController } from './change_management.controller';

describe('ChangeManagementController', () => {
  let controller: ChangeManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChangeManagementController],
    }).compile();

    controller = module.get<ChangeManagementController>(ChangeManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
