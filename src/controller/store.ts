import { create } from 'zustand';
import { AnswerSlice, createAnswerSlice } from './entities/answer-slice';
import { AuthSlice, createAuthSlice } from './entities/auth-slice';
import { QuestionSlice, createQuestionSlice } from './entities/question-slice';

export type StoreState = AuthSlice & QuestionSlice & AnswerSlice;

const useStore = create<StoreState>()((...params) => ({
  ...createAuthSlice(...params),
  ...createQuestionSlice(...params),
  ...createAnswerSlice(...params),
}));

export default useStore;
