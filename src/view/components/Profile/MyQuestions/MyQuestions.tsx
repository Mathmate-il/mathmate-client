import './myQuestions.scss';
import QuestionControl from '../../QuestionControl';
import Question from '../../../../model/entities/Question';
import { useGetAllQuestionsQuery } from '../../../../controller/entities/question/question.action';

function MyQuestions() {
  const getAllQuestionQuery = useGetAllQuestionsQuery();

  if (getAllQuestionQuery.isLoading) {
    return <div>Loading ...</div>;
  }

  if (getAllQuestionQuery.isError) {
    console.error('Error:', getAllQuestionQuery.error);
    return <div>Error ...</div>;
  }

  return (
    <div className="myQuestions">
      {getAllQuestionQuery.data.map((question: Question) => (
        <QuestionControl question={question} key={question.id} />
      ))}
    </div>
  );
}

export default MyQuestions;
