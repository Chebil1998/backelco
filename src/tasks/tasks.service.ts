import { Injectable, NotFoundException } from '@nestjs/common';
import { Tasks } from './entities/tasks.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddTasks } from './dto/Add.tasks.dto';
import { UpdateTasks } from './dto/Update.tasks.dto';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Tasks)
        private readonly TasksRepository: Repository<Tasks>,
    ) { }


    async getTasks(): Promise<Tasks[]> {
        return this.TasksRepository.find();
    }

    async getTask(id: number): Promise<Tasks[]> {
        return await this.TasksRepository.find({ where: {id } });
    }


    async addtasks(addTasksDto: AddTasks) {
        const tasks = this.TasksRepository.create(addTasksDto);
        return this.TasksRepository.save(tasks);

    }
    async updateTasks(id:number, UpdateTasksDto: UpdateTasks) {
        const Tasks = await this.TasksRepository.findOne({ where: { id} });

        if (!Tasks) {
            throw new NotFoundException('requirement not found');
        }

        Object.assign(Tasks, UpdateTasksDto);

        return this.TasksRepository.save(Tasks);
    }

    async deleteTasks(id: number) {
        const tasks = await this.TasksRepository.find({ where: { id } });
        if (!tasks) {
            throw new NotFoundException('tasks not found');
        }
        this.TasksRepository.remove(tasks);
    }

}
