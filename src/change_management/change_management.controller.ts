import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ChangeManagementService } from './change_management.service';
import { AddChangeDto } from './dto/Add.change.dto';
import { UpdateChangeDto } from './dto/Update.change.dto';

@Controller('change-management')
export class ChangeManagementController {


    constructor(private readonly ChangeService: ChangeManagementService) { }

    @Get('changeAll')
    async getAll() {
        return this.ChangeService.getChanges();
    }
    @Get('change/:id')
    async getRequirement(@Param('id') id: number) {

        return this.ChangeService.getChange(id);
    }
    @Post('changeAdd')
    async addchange(@Body() addchangedto:AddChangeDto){
        
        return this.ChangeService.addChange(addchangedto); 
    }

    @Put('changeupdate/:id')
    async updatechange(@Param ('id')id:number ,
    @Body()UpdateChangeDto :UpdateChangeDto)
    {
        return this.ChangeService.updateChange(id,UpdateChangeDto)  ; }

    @Delete('changedelete/:id')
    async deletechange(@Param('id') id:number){
        return this.ChangeService.deleteChange(id);
    }
    
   
}
