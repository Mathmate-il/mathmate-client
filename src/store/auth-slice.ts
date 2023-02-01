import { z } from 'zod';
import { StateCreator } from 'zustand';
import { initialUserObject, User } from '../typescript';

export interface AuthSlice {
  isLoggedIn: boolean;
  currentUser: z.infer<typeof User>;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isLoggedIn: true,
  currentUser: {
    ...initialUserObject,
    name: 'Michael Jorden',
    Image: 'https://mui.com/static/images/avatar/1.jpg',
    email: 'mymail@gmail.com',
  },
});
