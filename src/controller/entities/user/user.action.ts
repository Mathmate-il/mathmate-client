import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Question from '../../../model/entities/Question';
import Tag from '../../../model/entities/Tag';
import mainService from '../../Api/mainService';
import useStore from '../../store';

export function useGetAllQuestionsQuery() {
  const store = useStore((state) => state);

  return useQuery({
    queryKey: ['questions'],
    queryFn: mainService.getAllQuestions,
    onSuccess: (data) => {
      store.setQuestions(data);
    },
  });
}

export function useGetAllQuestionsByTagsQuery(tags: Tag[]) {
  const store = useStore((state) => state);

  return useQuery({
    queryKey: ['questions', tags],
    queryFn: () => mainService.getAllQuestionsByTags(tags),
    onSuccess: (data) => {
      store.setQuestions(data);
    },
  });
}

export function useGetAllQuestionsByOwnerQuery(ownerID: string) {
  const store = useStore((state) => state);

  return useQuery({
    queryKey: ['questions', ownerID],
    queryFn: () => mainService.getAllQuestionsByOwner(ownerID),
    onSuccess: (data) => {
      store.setQuestions(data);
    },
  });
}

export function useCreateQuestionMutation() {
  const store = useStore((state) => state);
  const navigate = useNavigate();

  return useMutation(
    (question: Question) => mainService.createQuestion(question),
    {
      onSuccess: (data) => {
        store.addQuestion(data);
        store.setSelectedQuestion(data);
        navigate('/searchResult');
      },
    },
  );
}
