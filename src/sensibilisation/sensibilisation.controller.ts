import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SensibilisationService } from './sensibilisation.service';
import { AddSensibilisation } from './dto/Add.sensibilisation.dto';
import { UpdateSensibilisation } from './dto/Update.sensibilisation.dto';

@Controller('sensibilisation')
export class SensibilisationController {
    constructor(private readonly sensibilisationService: SensibilisationService) { }

    
    @Get('sensibilisationsAll')
    async getAll() {
        return this.sensibilisationService.getSensibilisations();
    }
    @Get('sensibilisation/:id')
    async getsensibilisation(@Param('id') id: number) {

        return this.sensibilisationService.getSensibilisation(id);
    }
    @Post('sensibilisationAdd')
    async addSensibilisation(@Body() addSensibilisationDto:AddSensibilisation){
        
        return this.sensibilisationService.addsensibilisation(addSensibilisationDto); 
    }

    @Put('sensibilisationupdate/:id')
    async updatesensibilisation(@Param ('id')id:number ,
    @Body()updateSensibilisationDto :UpdateSensibilisation)
    {
        return this.sensibilisationService.updateSensibilisation(id,updateSensibilisationDto)  ; }

    @Delete('sensibilisationdelete/:id')
    async deleteSensibilisation(@Param('id') id:number){
        return this.sensibilisationService.deleteSensibilisation(id);
    }

}
