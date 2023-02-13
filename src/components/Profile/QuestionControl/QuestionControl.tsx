import BookmarkIcon from '@assets/bookmark.svg';
import Question from '../../../typescript/entities/Question';
import './QuestionControl.scss';

interface QuestionProps {
  question: Question;
}

function QuestionControl({ question }: QuestionProps) {
  return (
    <div className="questioControl">
      <div className="header">
        <h1>{question.title}</h1>
        <img src={BookmarkIcon} alt="bookmark" />
      </div>
      <p>{question.question}</p>
    </div>
  );
}

export default QuestionControl;
