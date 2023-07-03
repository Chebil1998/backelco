import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IncidentService } from './incident.service';
import { AddIncident } from './dto/Add.incident.dto';
import { Updateincident } from './dto/Update.incident.dto';

@Controller('incident')
export class IncidentController {
    constructor(private readonly IncidentService: IncidentService) { }

    @Get('IncidentsAll')
    async getAll() {
        return this.IncidentService.getIncidents();
    }
    @Get('incident/:id')
    async getIncident(@Param('id') id: number) {

        return this.IncidentService.getIncident(id);
    }
    @Post('incidentAdd')
    async AddIncident(@Body() addIncidentDto:AddIncident){
        
        return this.IncidentService.addIncident(addIncidentDto ); 
    }


    @Put('incident/:id')
    async updateIncident(@Param ('id')id:number ,
    @Body()updateIncidentDto :Updateincident)
    {
        return this.IncidentService.updateIncident(id,updateIncidentDto)  ; }

    @Delete('incident/:id')
    async deleteIncident(@Param('id') id:number){
        return this.IncidentService.deleteIncident(id);
    }

    @Get('TauxIncident')
    async getTaux() {
        return this.IncidentService.TauxIncident();
    }
    @Get('TauxIncidentMoyen')
    async getTauxMoy() {
        return this.IncidentService.calculateAverageResponseRate();
    }
}
