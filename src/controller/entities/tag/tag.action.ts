import { useQuery } from '@tanstack/react-query';
import mainService from '../../Api/mainService';
import { QueryKeys } from '../../Api/types';
import useStore from '../../store';

export function useGetAllTagsQuery() {
  const store = useStore((state) => state);

  return useQuery({
    queryKey: [QueryKeys.TAG],
    queryFn: mainService.getAllTags,
    onSuccess: (data) => {
      store.setAllTags(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
}
