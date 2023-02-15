import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import mainService from '../../Api/mainService';
import useStore, { StoreState } from '../../store';

const useQuestions = () => {
  const store: StoreState = useStore((state: StoreState) => state);

  const getAllQuestionQuery = useQuery({
    queryKey: ['questions'],
    queryFn: () => mainService.getAllQuestions(),
  });

  useEffect(() => {
    if (getAllQuestionQuery.isSuccess) {
      store.setQuestions(getAllQuestionQuery.data);
    }
  }, [getAllQuestionQuery.isSuccess, getAllQuestionQuery.data]);

  return [getAllQuestionQuery];
};

export default useQuestions;
