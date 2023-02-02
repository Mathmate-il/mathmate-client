import { StateCreator } from 'zustand';
import { initialUserObject, User } from '../typescript';

export interface AuthSlice {
  isLoggedIn: boolean;
  currentUser: User;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isLoggedIn: true,
  currentUser: {
    ...initialUserObject,
  },
});
