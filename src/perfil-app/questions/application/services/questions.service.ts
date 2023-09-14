import { Inject, Injectable } from '@nestjs/common';
import { QuestionRepository } from '../../domain/repository/question.repository';
import { CreateQuestionDto } from '../../domain/dto/create-question.dto';
import { UpdateQuestionDto } from '../../domain/dto/update-question.dto';

@Injectable()
export class QuestionsService {

  constructor(
    @Inject('QuestionRepository') private questionRepository: QuestionRepository
  ){}

  create(createQuestionDto: CreateQuestionDto) {
    return this.questionRepository.create(createQuestionDto)
  }

  findAll() {
    return this.questionRepository.findAll()
  }

  findOne(id: number) {
    return this.questionRepository.findById(id);
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return this.questionRepository.update(id, updateQuestionDto)
  }

  remove(id: number) {
    return this.questionRepository.delete(id)
  }
}
