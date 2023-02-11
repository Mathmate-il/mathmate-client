import { z } from 'zod';
import { createTypeFromZodSchema } from '../helpers/createType';
import { Question } from './Question';

const NewAnswerSchema = z.object({
  answer: z.string(),
  relatedQuestion: Question,
});

export const NewAnswer = createTypeFromZodSchema(NewAnswerSchema);
