import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { QuestionEntity } from "./question.entity";


@Entity({name:'type_question'})
export class TypeQuestionEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column('text',{
        unique: true
    })
    type_question:string

      // Questions
  @OneToMany(() => QuestionEntity,
    (question) => question.id_type_question, 
    { cascade: true, eager: true, }
  )
  id_question: QuestionEntity;
}
