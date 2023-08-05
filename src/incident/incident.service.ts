import { Injectable, NotFoundException } from '@nestjs/common';
import { Incident } from './entities/incident.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Entity, Not, Repository } from 'typeorm';
import { AddIncident } from './dto/Add.incident.dto';
import { Updateincident } from './dto/Update.incident.dto';

@Injectable()
export class IncidentService {


    constructor(
        @InjectRepository(Incident)
        private readonly IncidentRepository: Repository<Incident>,
    ) { }

    async getIncidents(): Promise<Incident[]> {
        return this.IncidentRepository.find();
    }
    async getIncident(id: number): Promise<Incident[]> {
        return await this.IncidentRepository.find({ where: { id } });
    }
    async addIncident(addIncidentdto: AddIncident) {
        const incident = this.IncidentRepository.create(addIncidentdto);
        return this.IncidentRepository.save(incident);

    }
    async updateIncident(id: number, UpdateincidentDto: Updateincident) {
        const incident = await this.IncidentRepository.findOne({ where: { id } });

        if (!incident) {
            throw new NotFoundException('incident not found');
        }
  // Update the properties of the existing product based on the DTO
        Object.assign(incident, UpdateincidentDto);

        return this.IncidentRepository.save(incident);
    }

    async deleteIncident(id: number) {
        const incident = await this.IncidentRepository.find({ where: { id } });
        if (!incident) {
            throw new NotFoundException('incident not found');
        }
        this.IncidentRepository.remove(incident);
    }


async TauxIncident():Promise<number> {
  
    const incidents = await this.getIncidents();
    const incident = await this.IncidentRepository.findOne({where:{NBSystem: Not(0)}});

    const totalIncidents = incidents.length;
    const totalsystem=incident[1].NBSystem;

    const Taux=totalIncidents/totalsystem;

    
  
    // Retourner le taux d'incident calculé
    return Taux;



}
async calculateAverageResponseRate(): Promise<number> {
   
    const incidents = await this.IncidentRepository.find();

    let sum = 0;
    incidents.forEach((incident) => {
      const differenceInMilliseconds = incident.Date_resolution.getTime() - incident.Date_detection.getTime();
      const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
      sum += differenceInDays;
    });
  
    const averageResponseRate = sum / incidents.length;
  
    return averageResponseRate;
  }



}