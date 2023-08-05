import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';




@Entity()

export class Tasks {
    @PrimaryGeneratedColumn()

    id: number;


    @Column()

    reference: String;


    @Column()

    title : String;


    @Column()

    applicable: String;

   
    @Column()

    implemented: String;
    
    @Column()

    justification: String;
    
    @Column()

    registration: String;
    
    @Column()

    entities_concerned: String;
    
    @Column()

    code: String;
    
    @Column()

    version: String;
    
    @Column()

    date: Date;
   

}