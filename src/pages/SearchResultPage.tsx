import { Card, Container, Stack } from '@mui/material';
import { MuiChipsInput } from 'mui-chips-input';
import { z } from 'zod';
import { Question } from '../typescript';
import SearchInput from '../components/searchInput';
import useStore, { StoreState } from '../store/store';

function SearchResult() {
  const selectedQuestion = useStore(
    (state: StoreState) => state.selectedQuestion
  );

  const questions: z.infer<typeof Question>[] = useStore(
    (state: StoreState) => state.questions
  );

  const handleChipsChange = () => {};

  return (
    <>
      <Container sx={{ my: 2, justifyContent: 'flex-start' }}>
        <SearchInput text={selectedQuestion?.question} />
      </Container>

      <MuiChipsInput
        value={selectedQuestion?.tags}
        onChange={handleChipsChange}
        fullWidth
        sx={{ mb: 2 }}
      />

      <Stack spacing={2}>
        {questions.map((question) => (
          <Card key={question.id}>
            <h3>{question.title}</h3>
            <p>{question.question}</p>
          </Card>
        ))}
      </Stack>
    </>
  );
}

export default SearchResult;
