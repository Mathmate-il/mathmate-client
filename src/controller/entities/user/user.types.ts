import User from '../../../model/entities/User';

export interface UserSlice {
  me: User | undefined | null;
  setMe: (user: User) => void;
}
