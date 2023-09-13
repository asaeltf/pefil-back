import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'type_question'})
export class TypeQuestion {

    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    type_question:string




}
