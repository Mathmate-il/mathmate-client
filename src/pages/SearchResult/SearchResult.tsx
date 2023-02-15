import './SearchResult.scss';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import QuestionControl from '@/components/QuestionControl';
import { getAllQuestions } from '@/components/fetchers/questionFetchers';
import Question from '@/typescript/entities/Question';
import useStore, { StoreState } from '@/store/store';

export default function SearchResult() {
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
    <div className="searchResult">
      <div className="top">
        <div className="question" />
        <div className="tags">
          <span className="tag">Math</span>
          <span className="tag">Else</span>
          <span className="tag">Math2</span>
        </div>
        <button className="btn" type="button" onClick={() => {}}>
          Search again
        </button>
      </div>
      <div className="myQuestions">
        {questionsQuery.data.map((question: Question) => (
          <QuestionControl question={question} key={question.id} />
        ))}
      </div>
    </div>
  );
}
