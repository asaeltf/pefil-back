import { IsIn, IsInt, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateQuestionDto {

    @IsString()
    @MinLength(10)
    text_question:string

    @IsNumber()
    @IsPositive()
    type_question:number

    @IsNumber()
    @IsPositive()
    type_visibility:number
}
