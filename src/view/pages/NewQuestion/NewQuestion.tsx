/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, SyntheticEvent } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { useCreateQuestionMutation } from '../../../controller/entities/question/question.action';
import Question from '../../../model/entities/Question';
import Footer from '../../components/Footer';
import './NewQuestion.scss';

const initQuestion = {
  id: crypto.randomUUID().toString(),
  createdAt: new Date().toString(),
  question: '',
  title: '',
  tags: [],
  rating: 0,
  owner: {
    id: crypto.randomUUID().toString(),
    createdAt: new Date().toString(),
    email: '',
    name: '',
    image: '',
  },
};

export default function NewQuestion() {
  const [tags, setTags] = useState([]);
  const createQuestionMutation = useCreateQuestionMutation();

  // todo: shold remove all this objects initializations
  const [question, setQuestion] = useState<Question>(initQuestion);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    createQuestionMutation.mutate(question);
  };

  const handleInputChanged = (e: any) => {
    setQuestion((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleTagsChanged = (tags) => {
    setTags(tags);
  };

  return (
    <div className="home">
      <header className="header">
        <a href="/">
          <h1 className="heading-1">MathMate</h1>
        </a>
      </header>
      <div className="contentBody newQ">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="heading-1" style={{ fontSize: '46px' }}>
            New Question
          </h1>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={question.title}
            onChange={handleInputChanged}
          />
          <label htmlFor="tag">Tags:</label>
          <TagsInput
            value={tags}
            onChange={handleTagsChanged}
            onlyUnique
            inputProps={{ placeHolder: '' }}
          />
          <label htmlFor="text">Text:</label>
          <textarea
            id="question"
            name="question"
            cols={42}
            rows={16}
            className="qText"
            value={question.question}
            onChange={handleInputChanged}
          />
          <button type="submit" className="btn">
            Ask
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
