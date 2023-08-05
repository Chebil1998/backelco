import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';




@Entity()

export class Sensibilisation {

    @PrimaryGeneratedColumn()

    id: number;


    @Column()

    Nb_participant : number;


    @Column()

    Nb_employee: number;

    @Column()

    Date_formation: Date;
   

}