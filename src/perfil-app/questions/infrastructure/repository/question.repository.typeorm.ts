import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../../domain/entities/question';
import { QuestionRepository } from '../../domain/repository/question.repository';
import { DataSource, Repository } from 'typeorm';
import { QuestionEntity } from '../entities/question.entity';
import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateQuestionDto } from '../../domain/dto/create-question.dto';
import { TypeQuestionEntity } from '../entities/type-question.entity';
import { VisibilityQuestionEntity } from '../entities/visibility-question.entity';

@Injectable()
export class QuestionRepositoryTypeORM implements QuestionRepository {

    private readonly logger = new Logger('QuestionRepositoryTypeORM');

  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionRepository: Repository<QuestionEntity>,

    @InjectRepository(TypeQuestionEntity)
    private readonly typeQuestionRepository: Repository<TypeQuestionEntity>,

    @InjectRepository(VisibilityQuestionEntity)
    private readonly visibilityQuestionRepository: Repository<VisibilityQuestionEntity>,
    private readonly dataSource: DataSource

  ) {}

  findById(id: number): Promise<Question> {
    throw new Error('Method not implemented.');
  }


  async findAll(){
    const questions = await this.questionRepository.find({
        relations: {
            id_type_question:true,
            id_visibility: true
        }
    });

    return questions;
  }


  async create(createQuestionDto: CreateQuestionDto){
    // const queryRunner = this.dataSource.createQueryRunner()
    // await queryRunner.connect();
    try {
        const {type_question, type_visibility,...questionDetails} = createQuestionDto

        const typeQuestion = await this.typeQuestionRepository.findOne({where: {id: type_question}});
        const visibilityQuestion = await this.visibilityQuestionRepository.findOne({where: {id: type_visibility}})
        console.log(typeQuestion)
        const newQuestion = this.questionRepository.create({
            ...questionDetails,
            id_type_question: typeQuestion,
            id_visibility: visibilityQuestion,
        });
        await this.questionRepository.save(createQuestionDto)
        return newQuestion;
        
      } catch (error) {
        this.handleDBExceptions(error);
      }
    }


  update(id: number){
    throw new Error('Method not implemented.');
  }


  delete(id: number): Promise<string> {
    throw new Error('Method not implemented.');
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }

}
