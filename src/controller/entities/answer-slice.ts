import { StateCreator } from 'zustand';
import Answer from '../typescript/entities/Answer';

export interface AnswerSlice {
  answers: Answer[];
}

export const createAnswerSlice: StateCreator<AnswerSlice> = (set) => ({
  answers: [],
  setAnswers: (answers: Answer[]) => {
    set((state: AnswerSlice) => ({
      ...state,
      answers,
    }));
  },
});
