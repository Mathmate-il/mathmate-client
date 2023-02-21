import User from '../../../model/entities/User';

export interface AuthSlice {
  currentUser: User | undefined | null;
  token: string | undefined;
  setToken: (token: string) => void;
  setCurrentUser: (user: User) => void;
  isLoggedIn: boolean;
}
