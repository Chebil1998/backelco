import { Module } from '@nestjs/common';
import { ProjectSecurity } from './entities/projectsec.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectSecurityController } from './project_security.controller';
import { ProjectSecurityService } from './project_security.service';

@Module({

    imports:[TypeOrmModule.forFeature([ProjectSecurity])],
  controllers: [ProjectSecurityController],
  providers: [ProjectSecurityService]
})
export class ProjectSecurityModule {
    
}
