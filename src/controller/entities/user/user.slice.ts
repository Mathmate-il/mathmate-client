import { StateCreator } from 'zustand';
import User from '../../../model/entities/User';
import { UserSlice } from './user.types';

export const createQuestionSlice: StateCreator<UserSlice> = (set) => ({
  me: undefined,
  setMe(user: User) {
    set((state: UserSlice) => ({
      ...state,
      me: user,
    }));
  },
});
