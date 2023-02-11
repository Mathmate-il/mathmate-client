import { z } from 'zod';
import { createTypeFromZodSchema } from '../helpers/createType';
import { Question } from './Question';
import { User } from './User';

const AnswerSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  isChosen: z.boolean(),
  answer: z.string(),
  owner: User,
  relatedQuestion: Question,
  rate: z.number(),
});

export const Answer = createTypeFromZodSchema(AnswerSchema);
