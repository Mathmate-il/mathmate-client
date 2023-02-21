import { create } from 'zustand';
import { AnswerSlice, createAnswerSlice } from './entities/answer-slice';
import { AuthSlice, createAuthSlice } from './entities/auth/auth-slice';
import { createQuestionSlice } from './entities/question/question.slice';
import { QuestionSlice } from './entities/question/question.types';

export type StoreState = AuthSlice & QuestionSlice & AnswerSlice;

const useStore = create<StoreState>()((...params) => ({
  ...createAuthSlice(...params),
  ...createQuestionSlice(...params),
  ...createAnswerSlice(...params),
}));

export default useStore;
