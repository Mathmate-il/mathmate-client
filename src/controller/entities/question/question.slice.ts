import { StateCreator } from 'zustand';
import Question from '../../../model/entities/Question';
import { QuestionSlice } from './question.types';

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
  setSelectedQuestion: (question: Question) => {
    set((state: QuestionSlice) => ({
      ...state,
      selectedQuestion: question,
    }));
  },
});
