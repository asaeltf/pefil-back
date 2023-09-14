import { CreateQuestionDto } from "../dto/create-question.dto";
import { UpdateQuestionDto } from "../dto/update-question.dto";
import { Question } from "../entities/question";

export interface QuestionRepository{

    findById(id: number): Promise<Question>;

    findAll();

    create(createQuestionDto: CreateQuestionDto);

    update(id: number, updateQuestionDto: UpdateQuestionDto);
    
    delete(id:number): Promise<string>
}