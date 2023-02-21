import { useMutation } from '@tanstack/react-query';
import mainService from '../../Api/mainService';
import useStore from '../../store';

export function useLogin() {
  return useMutation((credentials: string) => mainService.login(credentials), {
    onSuccess: (data) => {
      useStore.setState({ token: data.token });
    },
    onError: (error) => {
      console.error(error);
    },
  });
}
