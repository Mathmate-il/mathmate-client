import { create } from 'zustand';
import { AnswerSlice, createAnswerSlice } from './answer-slice';
import { AuthSlice, createAuthSlice } from './auth-slice';
import { QuestionSlice, createQuestionSlice } from './question-slice';

export type StoreState = AuthSlice & QuestionSlice & AnswerSlice;

const useStore = create<StoreState>()((...params) => ({
  ...createAuthSlice(...params),
  ...createQuestionSlice(...params),
  ...createAnswerSlice(...params),
}));

export default useStore;
