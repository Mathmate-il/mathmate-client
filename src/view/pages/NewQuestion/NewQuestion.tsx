import { useState, SyntheticEvent } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { useCreateQuestionMutation } from '../../../controller/entities/question/question.action';
import { useGetAllTagsQuery } from '../../../controller/entities/tag/tag.action';
import useStore from '../../../controller/store';
import Question from '../../../model/entities/Question';
import Tag from '../../../model/entities/Tag';
import Footer from '../../components/Footer';
import './NewQuestion.scss';

const initQuestion = {
  id: '',
  createdAt: '',
  question: '',
  title: '',
  tags: [],
  rating: 0,
  owner: {
    id: '',
    createdAt: '',
    email: '',
    name: '',
    image: '',
  },
};

export default function NewQuestion() {
  const [tags, setTags] = useState([]);
  const createQuestionMutation = useCreateQuestionMutation();
  const currentUser = useStore((state) => state.currentUser);

  useGetAllTagsQuery();

  const allTags = useStore((state) => state.allTags);

  const [question, setQuestion] = useState<Question>(initQuestion);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    // todo: remove this tag mocking
    const mockTags: Tag[] = [
      { id: '14c66d82-a0cf-4203-94f5-b34cf312607d', tagName: 'Geometry' },
    ];

    if (currentUser) {
      const updatedQuestion: Question = {
        ...question,
        owner: currentUser,
        tags: mockTags,
      };
      createQuestionMutation.mutate(updatedQuestion);
    }
  };

  const handleInputChanged = (e: any) => {
    setQuestion((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleTagsChanged = (newTags) => {
    setTags(newTags);
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
          <label htmlFor="tagsInput">Tags:</label>
          <TagsInput
            validationRegex={
              new RegExp(
                `\\b${allTags.map((t) => t.tagName).join('\\b|\\b')}\\b`,
              )
            }
            onValidationReject={(data) => {
              alert(`tag ${data} is not supported`);
            }}
            value={tags}
            onChange={handleTagsChanged}
            onlyUnique
            inputProps={{ placeholder: '' }}
          />
          <label htmlFor="question">Text:</label>
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
