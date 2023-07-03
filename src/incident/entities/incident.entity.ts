import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';




@Entity()

export class Incident {

    @PrimaryGeneratedColumn('increment')

    id: number;

    @Column()

    NBSystem: number;

    @Column()

    Title: string;


    @Column()

    Date_detection: Date;

    @Column()

    Nature: string;
    @Column()

    Date_resolution: Date;

    @Column()

    Measure: string;

}