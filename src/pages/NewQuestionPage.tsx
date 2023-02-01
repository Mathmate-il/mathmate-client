import { TextField, Button } from '@mui/material';
import { MuiChipsInput } from 'mui-chips-input';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import useStore, { StoreState } from '../store/store';
import { initialQuestionObject, Question } from '../typescript';

function NewQuestion() {
  const navigate = useNavigate();

  const addQuestion = useStore((state: StoreState) => state.addQuestion);

  const [question, setQuestion] = useState<z.infer<typeof Question>>({
    ...initialQuestionObject,
    id: crypto.randomUUID(),
  });

  const handleChipsChange = (newTags: string[]) => {
    setQuestion((prevState) => ({ ...prevState, tags: newTags }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addQuestion(question);
    navigate('/searchResult');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setQuestion((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="title"
          label="Title"
          value={question.title}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <MuiChipsInput
          value={question.tags}
          onChange={handleChipsChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          id="question"
          label="question"
          value={question.question}
          onChange={handleChange}
          fullWidth
          multiline
          required
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Ask
        </Button>
      </form>
    </>
  );
}

export default NewQuestion;
