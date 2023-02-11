import { z } from 'zod';
import { createTypeFromZodSchema } from '../helpers/createType';

const UserSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  name: z.string(),
  email: z.string().email(),
  image: z.string(),
});

export const User = createTypeFromZodSchema(UserSchema);
