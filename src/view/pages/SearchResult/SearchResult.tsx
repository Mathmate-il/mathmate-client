import './SearchResult.scss';
import TagsInput from 'react-tagsinput';
import { useState } from 'react';
import Question from '../../../model/entities/Question';
import QuestionControl from '../../components/QuestionControl';
import { useGetAllQuestionsQuery } from '../../../controller/entities/question/question.action';
import useStore from '../../../controller/store';

export default function SearchResult() {
  const store = useStore((state) => state);

  const getAllQuestionQuery = useGetAllQuestionsQuery();
  const [tags] = useState([]);

  if (getAllQuestionQuery.isLoading) {
    return <div>Loading ...</div>;
  }

  if (getAllQuestionQuery.isError) {
    console.error('Error:', getAllQuestionQuery.error);
    return <div>Error ...</div>;
  }

  return (
    <div className="searchResult">
      <div className="top">
        <div className="question" />
        <TagsInput value={tags} disabled />
        <button className="btn" type="button" onClick={() => {}}>
          Search again
        </button>
      </div>
      <div className="myQuestions">
        {getAllQuestionQuery.data.map((question: Question) => (
          <QuestionControl question={question} key={question.id} />
        ))}
      </div>
    </div>
  );
}
