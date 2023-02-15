import './SearchResult.scss';
import Question from '../../../model/entities/Question';
import QuestionControl from '../../components/QuestionControl';
import useQuestions from '../../../controller/entities/question/question.action';

export default function SearchResult() {
  const [getAllQuestionQuery] = useQuestions();

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
        {getAllQuestionQuery.data.map((question: Question) => (
          <QuestionControl question={question} key={question.id} />
        ))}
      </div>
    </div>
  );
}
