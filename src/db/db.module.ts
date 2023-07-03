import { Module } from '@nestjs/common';
import { DbController } from './db.controller';
import { DbService } from './db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requirements } from 'src/requirements/entities/requirements.entity';
import { Incident } from 'src/incident/entities/incident.entity';
import { Sensibilisation } from 'src/sensibilisation/entities/sensibilisation.entity';

@Module({
    imports: [TypeOrmModule.forRoot({

        type: "mssql",

        host: "localhost",

        port: 1433,

        username: "sa",

        password: "Elco123!",

        database: "Elco-cybersec",

        entities:  [Requirements,Incident,Sensibilisation],

        synchronize: false,

        extra: {

            trustServerCertificate: true,

        }

    }), TypeOrmModule.forFeature([Requirements]),TypeOrmModule.forFeature([Incident]),TypeOrmModule.forFeature([Sensibilisation])],

    exports: [DbModule],

    controllers: [DbController],

    providers: [DbService]

})

export class DbModule {


}
