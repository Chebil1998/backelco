import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbService } from './db/db.service';
import { DbController } from './db/db.controller';
import { DbModule } from './db/db.module';
import { RequirementsService } from './requirements/requirements.service';

import { RequirementsModule } from './requirements/requirements.module';
import { RequirementsController } from './requirements/requirements.controller';
import { IncidentController } from './incident/incident.controller';
import { IncidentModule } from './incident/incident.module';
import { SensibilisationController } from './sensibilisation/sensibilisation.controller';
import { SensibilisationModule } from './sensibilisation/sensibilisation.module';
import { ProjectSecurityService } from './project_security/project_security.service';
import { ProjectSecurityController } from './project_security/project_security.controller';
import { ProjectSecurityModule } from './project_security/project_security.module';
import { ChangeManagementService } from './change_management/change_management.service';
import { ChangeManagementModule } from './change_management/change_management.module';

@Module({
  imports: [DbModule, RequirementsModule, IncidentModule, SensibilisationModule, ProjectSecurityModule, ChangeManagementModule],
  controllers: [AppController, DbController,RequirementsController,IncidentController, SensibilisationController, ProjectSecurityController],
  providers: [AppService, DbService, RequirementsService, ProjectSecurityService, ChangeManagementService],
})
export class AppModule {}
