import User from '../../../model/entities/User';

export interface AuthSlice {
  isLoggedIn: boolean;
  currentUser: User | undefined | null;
  token: string | undefined;
  setToken: (token: string) => void;
}
