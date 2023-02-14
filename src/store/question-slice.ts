import { StateCreator } from 'zustand';
import Question from '../typescript/entities/Question';

export interface QuestionSlice {
  questions: Question[];
  selectedQuestion?: Question;
  addQuestion: (question: Question) => void;
  setQuestions: (questions: Question[]) => void;
}

export const createQuestionSlice: StateCreator<QuestionSlice> = (set) => ({
  questions: [],
  selectedQuestion: undefined,
  addQuestion(question: Question) {
    set((state: QuestionSlice) => ({
      ...state,
      selectedQuestion: question,
      questions: [...state.questions, question],
    }));
  },
  setQuestions: (questions: Question[]) => {
    set((state: QuestionSlice) => ({
      ...state,
      questions,
    }));
  },
});
