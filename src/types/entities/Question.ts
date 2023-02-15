import { z } from 'zod';
import { TagSchema } from './Tag';
import { UserSchema } from './User';

export const QuestionSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  title: z.string(),
  question: z.string(),
  owner: UserSchema,
  tags: z.array(TagSchema),
  rating: z.number(),
});

type Question = z.infer<typeof QuestionSchema>;
export default Question;
