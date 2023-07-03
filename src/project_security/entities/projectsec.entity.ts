import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';




@Entity()

export class ProjectSecurity {

    @PrimaryGeneratedColumn('increment')

    id: number;


    @Column()

    nb_project_sec:number;


    @Column()

    total_project:number;

   
}