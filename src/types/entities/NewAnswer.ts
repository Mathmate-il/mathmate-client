import { z } from 'zod';
import { QuestionSchema } from './Question';

export const NewAnswerSchema = z.object({
  answer: z.string(),
  relatedQuestion: QuestionSchema,
});

type NewAnswer = z.infer<typeof NewAnswerSchema>;
export default NewAnswer;
