
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';




@Entity()

export class ChangeManagement {

    @PrimaryGeneratedColumn('increment')

    id: number;


    @Column()

    title: string;


    @Column()

    requirement: string;

    @Column()

    status: string;
    @Column()

    date_change_demande: Date;

    @Column()

    date_change_prevu:Date;
}


