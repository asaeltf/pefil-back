import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TypeQuestion } from './type-question.entity';

@Entity({ name: 'questions' })
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text_question: string;

  // Questions
  @OneToMany(() => TypeQuestion, (typeQuestion) => typeQuestion.id, {
    cascade: true,
    eager: true,
  })
  id_visibility: number;
}
