import Question from '../../../model/entities/Question';

export interface QuestionSlice {
  questions: Question[];
  selectedQuestion?: Question;
  addQuestion: (question: Question) => void;
  setQuestions: (questions: Question[]) => void;
}
