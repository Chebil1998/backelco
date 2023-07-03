
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';




@Entity()

export class Requirements {

    @PrimaryGeneratedColumn('increment')

    id: number;

    @Column()

    section: string;


    @Column()

    requirement: string;

    @Column()

    status: string;
    @Column()

    note: string;

    @Column()

    securityFm: string;

}


