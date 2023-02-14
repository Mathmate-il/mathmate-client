import CommentIcon from '@/assets/comment.svg';
import AnswerIcon from '@/assets/answer.svg';
import RoundedImage from '@/components/RoundedImage';
import Question from '@/typescript/entities/Question';
import mockProfilePic from '@/assets/mockProfilePic.jpg';
import './Question.scss';

const question: Question = {
  id: '1',
  title: 'Question title',
  question: ` Ea corrupti laborum. Blanditiis sint officia corporis. Pariatur
  voluptatem quam temporibus ullam quis commodi accusamus et. Ratione aut
  magni. Est fugiat culpa. Veniam enim voluptatem vel qui ad nesciunt.`,
  createdAt: new Date().toString(),
};

function QuestionPage() {
  return (
    <div className="questionPage">
      <div className="top">
        <span className="heading-5">{question.title}</span>
        <p>{question.question}</p>
        <div className="questionDetails">
          <div className="author">
            <span>Author:</span>
            <div>
              <RoundedImage
                src={mockProfilePic}
                alt="profile pic"
                width="40px"
                height="40px"
              />
              <span>UserName</span>
            </div>
          </div>
          <div className="actions">
            <div>
              <button className="btnAction" type="button">
                Comment
              </button>
              <img src={CommentIcon} className="icon" alt="comment" />
            </div>
            <div>
              <button type="button">Answer</button>
              <img src={AnswerIcon} className="icon" alt="answer" />
            </div>
          </div>
          <div>
            <span>Top Answer:</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
