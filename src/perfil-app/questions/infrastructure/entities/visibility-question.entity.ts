import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'visibility_question'})
export class VisibilityQuestion {

    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    type_question:string

}
