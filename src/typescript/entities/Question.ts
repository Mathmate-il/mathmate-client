import { z } from 'zod';
import { createTypeFromZodSchema } from '../helpers/createType';
import { Tag } from './Tag';
import { User } from './User';

const QuestionSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  title: z.string(),
  question: z.string(),
  owner: User,
  tags: z.array(Tag),
  rating: z.number(),
});

export const Question = createTypeFromZodSchema(QuestionSchema);
