import BookmarkIcon from '@/assets/bookmark.svg';
import Question from '../../../model/entities/Question';
import './QuestionControl.scss';

interface QuestionProps {
  question: Question;
}

function QuestionControl({ question }: QuestionProps) {
  return (
    <div className="questioControl">
      <div className="header">
        <span className="title">{question.title}</span>
        <img src={BookmarkIcon} alt="bookmark" className="bookmark" />
      </div>
      <p>{question.question}</p>
    </div>
  );
}

export default QuestionControl;
