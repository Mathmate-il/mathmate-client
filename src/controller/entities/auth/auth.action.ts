import { useMutation } from '@tanstack/react-query';
import mainService from '../../Api/mainService';
import useStore, { StoreState } from '../../store';

export function useLogin() {
  const store: StoreState = useStore((state) => state);

  return useMutation((credentials: string) => mainService.login(credentials), {
    onSuccess: async (data) => {
      store.setToken(data.token);
      const me = await mainService.getMe(data.token);
      console.log(me);
      store.setCurrentUser(me);
    },
    onError: (error) => {
      console.error(error);
    },
  });
}
