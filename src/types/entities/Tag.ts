import { z } from 'zod';

export const TagSchema = z.object({
  id: z.string().uuid(),
  tagName: z.string(),
});

type Tag = z.infer<typeof TagSchema>;
export default Tag;
