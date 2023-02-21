import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Question from '../../../model/entities/Question';
import Tag from '../../../model/entities/Tag';
import mainService from '../../Api/mainService';
import { QueryKeys } from '../../Api/types';
import useStore from '../../store';

export function useGetAllQuestionsQuery() {
  const store = useStore((state) => state);

  return useQuery({
    queryKey: [QueryKeys.QUESTION],
    queryFn: mainService.getAllQuestions,
    onSuccess: (data) => {
      store.setQuestions(data);
    },
  });
}

export function useGetAllQuestionsByTagsQuery(tags: Tag[]) {
  const store = useStore((state) => state);

  return useQuery({
    queryKey: [QueryKeys.QUESTION, tags],
    queryFn: () => mainService.getAllQuestionsByTags(tags),
    onSuccess: (data) => {
      store.setQuestions(data);
    },
  });
}

export function useGetAllQuestionsByOwnerQuery(ownerID: string) {
  const store = useStore((state) => state);

  return useQuery({
    queryKey: [QueryKeys.QUESTION, ownerID],
    queryFn: () => mainService.getAllQuestionsByOwner(ownerID),
    onSuccess: (data) => {
      store.setQuestions(data);
    },
    onError: (error) => {
      console.error(error);
    },
  });
}

export function useCreateQuestionMutation() {
  const store = useStore((state) => state);
  const navigate = useNavigate();

  return useMutation(
    (newQuestion: Question) =>
      mainService.createQuestion(store.token ?? '', newQuestion),
    {
      onSuccess: (data) => {
        store.addQuestion(data);
        store.setSelectedQuestion(data);
        navigate('/searchResult');
      },
      onError: (error) => {
        console.error(error);
      },
    },
  );
}
