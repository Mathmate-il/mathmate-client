import { create } from "zustand";
import { AuthSlice, createAuthSlice } from "./auth-slice";
import { QuestionsSlice, createQuestionsSlice } from "./questions-slice";

export type StoreState = AuthSlice & QuestionsSlice;

const useStore = create<StoreState>()((...params) => ({
  ...createQuestionsSlice(...params),
  ...createAuthSlice(...params),
}));

export default useStore;
