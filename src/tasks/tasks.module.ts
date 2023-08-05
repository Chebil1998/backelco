import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasks } from './entities/tasks.entity';
import { TasksController } from './tasks.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Tasks])],
  controllers:[TasksController],
  providers:[TasksService]
})
export class TasksModule {}
