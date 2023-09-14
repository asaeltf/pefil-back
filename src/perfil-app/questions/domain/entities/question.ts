import { TypeQuestion } from "./type-question";
import { VisibilityQuestion } from "./visibility-question";

export class Question {

   id: number;

   text_question: string;

   id_type_question: TypeQuestion;

   id_visibility: VisibilityQuestion;
}
