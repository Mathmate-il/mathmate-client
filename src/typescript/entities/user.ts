import { z } from 'zod';

export const User = z.object({
  id: z.string(),
  createdAt: z.date(),
  email: z.string(),
  name: z.string(),
  image: z.string(),
});

export const initialUserObject: z.infer<typeof User> = {
  id: '',
  createdAt: new Date(),
  email: '',
  name: '',
  image: '',
};
