import { StateCreator } from 'zustand';
import { z } from 'zod';
import { Question, initialQuestionObject } from '../typescript';

export interface QuestionsSlice {
  questions: z.infer<typeof Question>[];
  selectedQuestion?: z.infer<typeof Question>;
  addQuestion: (question: z.infer<typeof Question>) => void;
}

export const createQuestionsSlice: StateCreator<QuestionsSlice> = (set) => ({
  questions: [initialQuestionObject],
  selectedQuestion: undefined,
  addQuestion(question: z.infer<typeof Question>) {
    set((state: QuestionsSlice) => ({
      ...state,
      selectedQuestion: question,
      questions: [...state.questions, question],
    }));
  },
});
