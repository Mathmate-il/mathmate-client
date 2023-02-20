import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Question from '../../../model/entities/Question';
import Tag from '../../../model/entities/Tag';
import mainService from '../../Api/mainService';
import useStore, { StoreState } from '../../store';

const useQuestions = () => {
  const store: StoreState = useStore((state: StoreState) => state);

  // getAllQuestion
  const getAllQuestionQuery = useQuery({
    queryKey: ['questions'],
    queryFn: mainService.getAllQuestions,
  });

  useEffect(() => {
    if (getAllQuestionQuery.isSuccess) {
      store.setQuestions(getAllQuestionQuery.data);
    }
  }, [getAllQuestionQuery.isSuccess, getAllQuestionQuery.data]);

  // useGetAllQuestionsByTags
  const useGetAllQuestionsByTagsQuery = (tags: Tag[]) =>
    useQuery({
      queryKey: ['questions', tags],
      queryFn: () => mainService.getAllQuestionsByTags,
    });

  useEffect(() => {
    if (getAllQuestionQuery.isSuccess) {
      store.setQuestions(getAllQuestionQuery.data);
    }
  }, [getAllQuestionQuery.isSuccess, getAllQuestionQuery.data]);

  const useCreateQuestionMutation = (question: Question) =>
    useMutation(() => mainService.createQuestion(question));

  return [
    getAllQuestionQuery,
    useCreateQuestionMutation,
    useGetAllQuestionsByTagsQuery,
  ];
};

export default useQuestions;
