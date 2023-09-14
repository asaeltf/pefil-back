import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TypeQuestionEntity } from './type-question.entity';
import { VisibilityQuestionEntity } from './visibility-question.entity';

@Entity({ name: 'questions' })
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', {
    unique: true,
  })
  text_question: string;

  @ManyToOne(
    () => TypeQuestionEntity, 
    (typeQuestion) => typeQuestion.type_question, 
    { onDelete: 'CASCADE',
  })
  type_question: TypeQuestionEntity;

  @ManyToOne(() => VisibilityQuestionEntity,
  (visibilityQuestion) => visibilityQuestion.type_visibility, 
  { onDelete: 'CASCADE',
  })
  type_visibility: VisibilityQuestionEntity;
}
