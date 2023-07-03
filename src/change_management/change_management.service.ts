import { Injectable, NotFoundException } from '@nestjs/common';
import { ChangeManagement } from './entities/change_management.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddChangeDto } from './dto/Add.change.dto';
import { UpdateChangeDto } from './dto/Update.change.dto';

@Injectable()
export class ChangeManagementService {

    constructor(
        @InjectRepository(ChangeManagement)
        private readonly Changerepository: Repository<ChangeManagement>,
    ) { }

    async getChanges(): Promise<ChangeManagement[]> {
        return this.Changerepository.find();
    }
    async getChange(id: number): Promise<ChangeManagement[]> {
        return await this.Changerepository.find({ where: { id } });
    }
    async addChange(addChangedto: AddChangeDto) {
        const change = this.Changerepository.create(addChangedto);
        return this.Changerepository.save(change);

    }
    async updateChange(id: number, UpdateChange:UpdateChangeDto) {
        const change = await this.Changerepository.findOne({ where: { id } });

        if (!change) {
            throw new NotFoundException('change not found');
        }
  // Update the properties of the existing product based on the DTO
        Object.assign(change, UpdateChange);

        return this.Changerepository.save(change);
    }

    async deleteChange(id: number) {
        const change = await this.Changerepository.find({ where: { id } });
        if (!change) {
            throw new NotFoundException('change not found');
        }
        this.Changerepository.remove(change);
    }



}



