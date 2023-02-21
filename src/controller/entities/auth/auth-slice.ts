import { StateCreator } from 'zustand';
import { AuthSlice } from './auth.types';

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isLoggedIn: true,
  currentUser: undefined,
  token: undefined,
  setToken(token: string) {
    set((state: AuthSlice) => ({
      ...state,
      token,
    }));
  },
});
