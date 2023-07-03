import { Injectable, NotFoundException } from '@nestjs/common';
import { Requirements } from './entities/requirements.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AddRequirementDto } from './dto/Add.requirement.dto';
import { UpdateRequirementDto } from './dto/Update.requirement.dto';

@Injectable()
export class RequirementsService {

    constructor(
        @InjectRepository(Requirements)
        private readonly RequirementRepository: Repository<Requirements>,
    ) { }


    async getRequirements(): Promise<Requirements[]> {
        return this.RequirementRepository.find();
    }

    async getRequirement(id: number): Promise<Requirements[]> {
        return await this.RequirementRepository.find({ where: {id } });
    }

    async addrequirement(addRequirementDto: AddRequirementDto) {
        const requirement = this.RequirementRepository.create(addRequirementDto);
        return this.RequirementRepository.save(requirement);

    }
    async updateRequirement(id: number, UpdateRequirementDto: UpdateRequirementDto) {
        const requirement = await this.RequirementRepository.findOne({ where: { id} });

        if (!requirement) {
            throw new NotFoundException('requirement not found');
        }

        Object.assign(requirement, UpdateRequirementDto);

        return this.RequirementRepository.save(requirement);
    }

    async deleteRequirement(id: number) {
        const requirement = await this.RequirementRepository.find({ where: { id } });
        if (!requirement) {
            throw new NotFoundException('requirement not found');
        }
        this.RequirementRepository.remove(requirement);
    }

    
async sumRequirementExist():Promise<number>{
return this.RequirementRepository.count({where:{status:'exist'}});

}

async sumRequirementAll():Promise<number>{
    return (await this.getRequirements()).length;


}
async tauxrequirement()
{
const all= this.sumRequirementAll();
const exist=this.sumRequirementExist();

const taux=(await exist/await all)/100;

return taux ;

    
}

}


