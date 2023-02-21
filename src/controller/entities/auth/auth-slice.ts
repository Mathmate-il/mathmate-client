import { StateCreator } from 'zustand';
import User from '../../../model/entities/User';
import { AuthSlice } from './auth.types';

export const createAuthSlice: StateCreator<AuthSlice> = (set, get) => ({
  isLoggedIn: false,
  currentUser: undefined,
  token: undefined,
  setToken(token: string) {
    set((state: AuthSlice) => ({
      ...state,
      token,
    }));
  },
  setCurrentUser(user: User) {
    set((state: AuthSlice) => ({
      ...state,
      currentUser: user,
      isLoggedIn: true,
    }));
  },
});
