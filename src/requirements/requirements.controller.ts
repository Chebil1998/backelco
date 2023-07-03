import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RequirementsService } from './requirements.service';
import { AddRequirementDto } from './dto/Add.requirement.dto';
import { UpdateRequirementDto } from './dto/Update.requirement.dto';

@Controller('requirements')
export class RequirementsController {
    constructor(private readonly requirementService: RequirementsService) { }

    @Get('requirementsAll')
    async getAll() {
        return this.requirementService.getRequirements();
    }
    @Get('requirement/:id')
    async getRequirement(@Param('id') id: number) {

        return this.requirementService.getRequirement(id);
    }
    @Post('requirementAdd')
    async addRequirement(@Body() addRequirementDto:AddRequirementDto){
        
        return this.requirementService.addrequirement(addRequirementDto); 
    }

    @Put('requirementupdate/:id')
    async updateRequirement(@Param ('id')id:number ,
    @Body()updateRequirementDto :UpdateRequirementDto)
    {
        return this.requirementService.updateRequirement(id,updateRequirementDto)  ; }

    @Delete('requirementdelete/:id')
    async deleteRequirement(@Param('id') id:number){
        return this.requirementService.deleteRequirement(id);
    }
    
    @Get('requirementstaux')
    async getcount(){
        return this.requirementService.tauxrequirement();
    }


}
