import { Module } from '@nestjs/common';
import { SensibilisationService } from './sensibilisation.service';
import { SensibilisationController } from './sensibilisation.controller';
import { Sensibilisation } from './entities/sensibilisation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Sensibilisation])],
  controllers:[SensibilisationController],
  providers:[SensibilisationService]
})
export class SensibilisationModule {}
