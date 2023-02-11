import { StateCreator } from 'zustand';
import { Question } from '../typescript';

export interface QuestionsSlice {
  questions: (typeof Question)[];
  selectedQuestion?: typeof Question;
  addQuestion: (question: typeof Question) => void;
}

export const createQuestionsSlice: StateCreator<QuestionsSlice> = (set) => ({
  questions: [],
  selectedQuestion: undefined,
  addQuestion(question: typeof Question) {
    set((state: QuestionsSlice) => ({
      ...state,
      selectedQuestion: question,
      questions: [...state.questions, question],
    }));
  },
});
