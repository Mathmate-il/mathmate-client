import React from 'react';
import './NewQuestion.scss';
import Footer from '../../components/Footer';
import { boolean } from 'zod';
const initialTags = {
  Math: false,
  Algebra: false,
  Geometry: false,
};
export default function NewQuestion() {
  const [tags, setTags] = React.useState(initialTags);
  const [text, setText] = React.useState('');
  const [title, setTitle] = React.useState('');
  const tagsList = Object.keys(initialTags);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log({ title, text, tags });
  };
  return (
    <div className="home">
      <header className="header">
        <h1 className="heading-1">MathMate</h1>
      </header>
      <div className="contentBody newQ">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="heading-1" style={{ fontSize: '48px' }}>
            New Question
          </h1>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="tag">Tags:</label>
          <fieldset className="tags">
            {tagsList.map((option) => (
              <div key={option} className="tags" style={{ padding: '5px' }}>
                <input
                  type="checkbox"
                  id={option}
                  value={option}
                  checked={tags[option as keyof typeof boolean]}
                  onChange={(event) => {
                    setTags({
                      ...tags,
                      [option]: event.target.checked,
                    });
                  }}
                />
                <label className="tag" htmlFor={option}>
                  {option}
                </label>
              </div>
            ))}
          </fieldset>
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            name="text"
            cols={42}
            rows={16}
            className="qText"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn" style={{ width: 'auto' }}>
            Ask
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
