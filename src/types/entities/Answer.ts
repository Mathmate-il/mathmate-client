import { z } from 'zod';
import { QuestionSchema } from './Question';
import { UserSchema } from './User';

export const AnswerSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  isChosen: z.boolean(),
  answer: z.string(),
  owner: UserSchema,
  relatedQuestion: QuestionSchema,
  rate: z.number(),
});

type Answer = z.infer<typeof AnswerSchema>;
export default Answer;
