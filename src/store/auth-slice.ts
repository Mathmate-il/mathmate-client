import { TypeOf } from 'zod';
import { StateCreator } from 'zustand';
export interface AuthSlice {
  isLoggedIn: boolean;
  currentUser: TypeOf<User>;
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
