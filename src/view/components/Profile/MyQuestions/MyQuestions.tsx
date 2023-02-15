import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import './myQuestions.scss';
import QuestionControl from '../../QuestionControl';
import { getAllQuestions } from '../../fetchers/questionFetchers';
import { StoreState } from '../../../../controller';
import useStore from '../../../../controller/store';
import Question from '../../../../model/entities/Question';

function MyQuestions() {
  const store: StoreState = useStore((state: StoreState) => state);

  const questionsQuery = useQuery({
    queryKey: ['questions'],
    queryFn: getAllQuestions,
  });

  useEffect(() => {
    if (questionsQuery.isSuccess) {
      store.setQuestions(questionsQuery.data);
    }
  }, [questionsQuery.isSuccess, questionsQuery.data]);

  if (questionsQuery.isLoading) {
    return <div>Loading ...</div>;
  }

  if (questionsQuery.isError) {
    console.error('Error:', questionsQuery.error);
    return <div>Error ...</div>;
  }

  return (
    <div className="myQuestions">
      {questionsQuery.data.map((question: Question) => (
        <QuestionControl question={question} key={question.id} />
      ))}
    </div>
  );
}

export default MyQuestions;
