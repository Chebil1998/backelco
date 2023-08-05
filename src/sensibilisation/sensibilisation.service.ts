import { Injectable, NotFoundException } from '@nestjs/common';
import { Sensibilisation } from './entities/sensibilisation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddSensibilisation } from './dto/Add.sensibilisation.dto';
import { UpdateSensibilisation } from './dto/Update.sensibilisation.dto';
@Injectable()
export class SensibilisationService {
    constructor(
        @InjectRepository(Sensibilisation)
        private readonly SensibilisationRepository: Repository<Sensibilisation>,
    ) { }


    async getSensibilisations(): Promise<Sensibilisation[]> {
        return this.SensibilisationRepository.find();
    }

    async getSensibilisation(id: number): Promise<Sensibilisation[]> {
        return await this.SensibilisationRepository.find({ where: {id } });
    }

    async addsensibilisation(addSensibilisationDto: AddSensibilisation) {
        const sensibilisation = this.SensibilisationRepository.create(addSensibilisationDto);
        return this.SensibilisationRepository.save(sensibilisation);

    }
    async updateSensibilisation(id: number, UpdateSensibilisationDto: UpdateSensibilisation) {
        const sensibilisation = await this.SensibilisationRepository.findOne({ where: { id} });

        if (!sensibilisation) {
            throw new NotFoundException('sensibilisation not found');
        }

        Object.assign(sensibilisation, UpdateSensibilisationDto);

        return this.SensibilisationRepository.save(sensibilisation);
    }

    async deleteSensibilisation(id: number) {
        const sensibilisation = await this.SensibilisationRepository.find({ where: { id } });
        if (!sensibilisation) {
            throw new NotFoundException('sensibilisation not found');
        }
        this.SensibilisationRepository.remove(sensibilisation);
    }

    async taux(){

        const sensibilisationEntity = await this.SensibilisationRepository.findOne({select:['Nb_employee']})

        if (sensibilisationEntity) {
          const nbemployee= sensibilisationEntity.Nb_employee;
          const nbpaticipant=sensibilisationEntity.Nb_participant;

          return    nbpaticipant/nbemployee     }
        


    }
}
