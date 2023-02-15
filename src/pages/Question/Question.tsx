import CommentIcon from '@/assets/comment.svg';
import AnswerIcon from '@/assets/answer.svg';
import RateIcon from '@/assets/rate.svg';
import RoundedImage from '@/components/RoundedImage';
import Question from '@/types/entities/Question';
import mockProfilePic from '@/assets/mockProfilePic.jpg';
import './Question.scss';
import '@/styles/main.scss';
import AnswerControl from '../../components/AnswerControl/AnswerControl';
import Answer from '../../typescript/entities/Answer';

const question: Question = {
  id: '1',
  title: 'Question title',
  question: ` Ea corrupti laborum. Blanditiis sint officia corporis. Pariatur
  voluptatem quam temporibus ullam quis commodi accusamus et. Ratione aut
  magni. Est fugiat culpa. Veniam enim voluptatem vel qui ad nesciunt.`,
  createdAt: new Date().toString(),
};

const mockAnswer: Answer = {
  id: '1',
  answer: `Natus beatae eaque adipisci perspiciatis aliquam et enim sed et enim sed 
  aliquam et enim sed et enim sed jsfgku
  occaecati beatae eaque adipisc....`,
  owner: {
    id: '2',
    image: '',
    name: "user's name",
    email: 'a@a.co.il',
    createdAt: new Date().toString(),
  },
  createdAt: '',
  isChosen: false,
  relatedQuestion: '2',
  rate: 0,
};

function QuestionPage() {
  return (
    <div className="questionPage">
      <div className="top">
        <div className="titleContainer">
          <span className="heading-5">{question.title}</span>
          <img src={RateIcon} className="rateIcon" alt="comment" />
        </div>
        <p>{question.question}</p>
        <div className="questionDetails">
          <div className="author">
            <span>Author:</span>
            <div className="userCard">
              <RoundedImage
                src={mockProfilePic}
                alt="profile pic"
                width="40px"
                height="40px"
              />
              <span className="p2">UserName</span>
            </div>
          </div>
          <div className="actions">
            <div className="actionBtnContainer">
              <button type="button" className="btnAction">
                Comment
              </button>
              <img src={CommentIcon} className="icon" alt="comment" />
            </div>
            <div className="actionBtnContainer">
              <button type="button" className="btnAction">
                Answer
              </button>
              <img src={AnswerIcon} className="icon" alt="answer" />
            </div>
          </div>
        </div>
        <div className="topAnswer">
          <div className="topAnswerTitle p1--bold">Top Answer:</div>
          <hr className="topAnswerHr" />
          <AnswerControl answer={mockAnswer} />
        </div>
        <div className="comments">
          <div className="commentsTitle p1--bold">Comments:</div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
