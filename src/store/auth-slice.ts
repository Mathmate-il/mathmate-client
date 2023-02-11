import { StateCreator } from 'zustand';
import User from '../typescript/entities/User';

export interface AuthSlice {
  isLoggedIn: boolean;
  currentUser: User;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isLoggedIn: true,
  currentUser: {
    id: crypto.randomUUID(),
    createdAt: new Date().toString(),
    name: 'Michael Jorden',
    image: 'https://mui.com/static/images/avatar/1.jpg',
    email: 'mymail@gmail.com',
  },
});
