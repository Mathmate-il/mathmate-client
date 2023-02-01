import { create } from 'zustand';
import { AuthSlice, createAuthSlice } from './auth-slice';
import { QuestionsSlice, createQuestionsSlice } from './questions-slice';

export type StoreState = AuthSlice & QuestionsSlice;

const useStore = create<StoreState>()((...a) => ({
  ...createQuestionsSlice(...a),
  ...createAuthSlice(...a),
}));

export default useStore;
