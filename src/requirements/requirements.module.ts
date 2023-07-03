import { Module } from '@nestjs/common';
import { RequirementsController } from './requirements.controller';
import { RequirementsService } from './requirements.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requirements } from './entities/requirements.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Requirements])],
  controllers: [RequirementsController],
  providers: [RequirementsService]
})
export class RequirementsModule {}
