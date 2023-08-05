import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AddTasks } from './dto/Add.tasks.dto';
import { UpdateTasks } from './dto/Update.tasks.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly TasksService: TasksService) { }

    @Get('TasksAll')
    async getAll() {
        return this.TasksService.getTasks();
    }
    @Get('task/:id')
    async gettasks(@Param('id') id: number) {

        return this.TasksService.getTask(id);
    }
    @Post('TasksAdd')
    async addtasks(@Body() addTasksDto:AddTasks){
        
        return this.TasksService.addtasks(addTasksDto); 
    }

    @Put('Tasksupdate/:id')
    async updatetasks(@Param ('id')id:number ,
    @Body()updateTasksDto :UpdateTasks)
    {
        return this.TasksService.updateTasks(id,updateTasksDto)  ; }

    @Delete('tasksdelete/:id')
    async deletetasks(@Param('id') id:number){
        return this.TasksService.deleteTasks(id);
    }
    
    

}
