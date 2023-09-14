import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionEntity } from './question.entity';

@Entity({ name: 'visibility_question' })
export class VisibilityQuestionEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    unique: true,
  })
  type_visibility: string;

  // Questions
  @OneToMany(() => QuestionEntity, (question) => question.id_visibility, {
    cascade: true,
    eager: true,
  })
  id_question: QuestionEntity;
}
