import { z } from 'zod';

export const Tag = z.object({
  id: z.string(),
  tagName: z.string(),
});
