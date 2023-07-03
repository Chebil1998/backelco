import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProjectSecurityService } from './project_security.service';
import { UpdateProjectDto } from './dto/Update.projectsec.dto'
import { AddProjectSecDto } from './dto/Add.projectsec.dto';

@Controller('project-security')
export class ProjectSecurityController {
    constructor(private readonly ProjectService: ProjectSecurityService) { }

    @Get('ProjectsAll')
    async getAll() {
        return this.ProjectService.getProjects();
    }
    @Get('Project/:id')
    async getProject(@Param('id') id: number) {

        return this.ProjectService.getProject(id);
    }
    @Post('ProjectAdd')
    async addProject(@Body() addProjectDto:AddProjectSecDto){
        
        return this.ProjectService.addProject(addProjectDto); 
    }

    @Put('Projectupdate/:id')
    async updateProject(@Param ('id')id:number ,
    @Body()updateProjectDto:UpdateProjectDto)
    {
        return this.ProjectService.updateProject(id,updateProjectDto)  ; }

    @Delete('Projectdelete/:id')
    async deleteProject(@Param('id') id:number){
        return this.ProjectService.deleteProject(id);
    }
    
   

}
