import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.string().datetime(),
  name: z.string(),
  email: z.string().email(),
  image: z.string(),
});
type User = z.infer<typeof UserSchema>;
export default User;
