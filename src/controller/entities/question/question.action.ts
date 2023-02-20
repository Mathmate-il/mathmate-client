import { useMutation, useQuery } from '@tanstack/react-query';
import Question from '../../../model/entities/Question';
import Tag from '../../../model/entities/Tag';
import mainService from '../../Api/mainService';
import useStore from '../../store';

const useGetAllQuestionsQuery = () => {
  const store = useStore((state) => state);

  return useQuery({
    queryKey: ['questions'],
    queryFn: mainService.getAllQuestions,
    onSuccess: (data) => {
      store.setQuestions(data);
    },
  });
};

const useGetAllQuestionsByTagsQuery = (tags: Tag[]) => {
  const store = useStore((state) => state);

  return useQuery({
    queryKey: ['questions', tags],
    queryFn: () => mainService.getAllQuestionsByTags(tags),
    onSuccess: (data) => {
      store.setQuestions(data);
    },
  });
};

const useCreateQuestionMutation = () => {
  const store = useStore((state) => state);

  return useMutation(
    (question: Question) => mainService.createQuestion(question),
    {
      onSuccess: (data) => {
        store.addQuestion(data);
      },
    },
  );
};

export {
  useGetAllQuestionsQuery,
  useGetAllQuestionsByTagsQuery,
  useCreateQuestionMutation,
};
