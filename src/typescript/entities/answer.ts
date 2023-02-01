import { z } from 'zod';

export const Answer = z.object({
  id: z.string(),
  createdAt: z.date(),
  isChosen: z.boolean(),
  rate: z.number(),
  answer: z.string(),
  ownerId: z.string(),
  questionId: z.string(),
});

export const initialAnswerObject: z.infer<typeof Answer> = {
  id: '',
  createdAt: new Date(),
  isChosen: false,
  rate: 0,
  answer: '',
  ownerId: '',
  questionId: '',
};
