import { Module } from '@nestjs/common';
import { QuestionsService } from './application/services/questions.service';
import { QuestionsController } from './infrastructure/controllers/questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionEntity } from './infrastructure/entities/question.entity';
import { TypeQuestionEntity } from './infrastructure/entities/type-question.entity';
import { VisibilityQuestionEntity } from './infrastructure/entities/visibility-question.entity';
import { QuestionRepositoryTypeORM } from './infrastructure/repository/question.repository.typeorm';

@Module({
  controllers: [QuestionsController],
  providers: [
    QuestionsService,
    {
      provide: 'QuestionRepository',
      useClass: QuestionRepositoryTypeORM,
    },
  ],
  imports:[
    TypeOrmModule.forFeature([QuestionEntity, TypeQuestionEntity, VisibilityQuestionEntity])
  ]
})
export class QuestionsModule {}
