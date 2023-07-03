import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectSecurity } from './entities/projectsec.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddProjectSecDto } from './dto/Add.projectsec';
import { UpdateProjectDto } from './dto/Update.projectsec';

@Injectable()
export class ProjectSecurityService {


    constructor(
        @InjectRepository(ProjectSecurity)
        private readonly ProjectSecurityRepository: Repository<ProjectSecurity>,
    ) { }


    async getProjects(): Promise<ProjectSecurity[]> {
        return this.ProjectSecurityRepository.find();
    }

    async getProject(id: number): Promise<ProjectSecurity[]> {
        return await this.ProjectSecurityRepository.find({ where: {id } });
    }

    async addProject(addProjectDto:AddProjectSecDto) {
        const project = this.ProjectSecurityRepository.create(addProjectDto);
        return this.ProjectSecurityRepository.save(project);

    }
    async updateProject(id: number, UpdateProjectDto:UpdateProjectDto) {
        const project = await this.ProjectSecurityRepository.findOne({ where: { id} });

        if (!project) {
            throw new NotFoundException('project not found');
        }

        Object.assign(project, UpdateProjectDto);

        return this.ProjectSecurityRepository.save(project);
    }

    async deleteProject(id: number) {
        const project = await this.ProjectSecurityRepository.find({ where: { id } });
        if (!project) {
            throw new NotFoundException('project not found');
        }
        this.ProjectSecurityRepository.remove(project);
    }

    
}
