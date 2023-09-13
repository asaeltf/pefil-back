import { Module } from '@nestjs/common';
import { QuestionsService } from './application/services/questions.service';
import { QuestionsController } from './infrastructure/controllers/questions.controller';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
