import { z } from 'zod';
import { TagSchema } from './Tag';

export const NewQuestionSchema = z.object({
  title: z.string(),
  question: z.string(),
  tags: z.array(TagSchema),
});

type NewQuestion = z.infer<typeof NewQuestionSchema>;
export default NewQuestion;
