import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Question from '@/typescript/entities/Question';
import './myQuestions.scss';
import QuestionControl from '../QuestionControl';
import { getAllQuestions } from '../../fetchers/questions';

function MyQuestions() {
  const questionsQuery = useQuery({
    queryKey: ['questions'],
    queryFn: getAllQuestions,
  });

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
