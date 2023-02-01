import { z } from 'zod';

export const Question = z.object({
  id: z.string(),
  createdAt: z.date(),
  title: z.string(),
  question: z.string(),
  rate: z.number(),
  ownerId: z.string(),
  tags: z.string().array(),
});

export const initialQuestionObject: z.infer<typeof Question> = {
  id: '',
  createdAt: new Date(),
  title: '',
  question: '',
  rate: 0,
  ownerId: '',
  tags: [],
}
