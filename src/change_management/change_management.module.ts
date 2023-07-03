import { Module } from '@nestjs/common';
import { ChangeManagementController } from './change_management.controller';
import { ChangeManagement } from './entities/change_management.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChangeManagementService } from './change_management.service';

@Module({
  imports:[TypeOrmModule.forFeature([ChangeManagement])],
  controllers: [ChangeManagementController],
  providers: [ChangeManagementService]
})
export class ChangeManagementModule {}
