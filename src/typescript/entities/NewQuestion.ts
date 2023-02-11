import { z } from 'zod';
import { createTypeFromZodSchema } from '../helpers/createType';
import Tag from './Tag';

const NewQuestionSchema = z.object({
  title: z.string(),
  question: z.string(),
  tags: z.array(Tag),
});

const NewQuestion = createTypeFromZodSchema(NewQuestionSchema);
export default NewQuestion;
