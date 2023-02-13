import React from 'react';
import Question from '../../../typescript/entities/Question';
import useStore, { StoreState } from '../../../store/store';
import './myQuestions.scss';
import QuestionControl from '../QuestionControl';

function MyQuestions() {
  const questions: Question[] = useStore(
    (state: StoreState) => state.questions,
  );

  return (
    <div className="myQuestions">
      {questions.map((question) => (
        <QuestionControl question={question} key={question.id} />
      ))}
    </div>
  );
}

export default MyQuestions;
