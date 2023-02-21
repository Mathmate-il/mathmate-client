import { create } from 'zustand';
import { AnswerSlice, createAnswerSlice } from './entities/answer-slice';
import { createAuthSlice } from './entities/auth/auth-slice';
import { AuthSlice } from './entities/auth/auth.types';
import { createQuestionSlice } from './entities/question/question.slice';
import { QuestionSlice } from './entities/question/question.types';
import { createTagSlice } from './entities/tag/tag.slice';
import { TagSlice } from './entities/tag/tag.types';

export type StoreState = AuthSlice & QuestionSlice & AnswerSlice & TagSlice;

const useStore = create<StoreState>()((...params) => ({
  ...createAuthSlice(...params),
  ...createQuestionSlice(...params),
  ...createAnswerSlice(...params),
  ...createTagSlice(...params),
}));

export default useStore;
