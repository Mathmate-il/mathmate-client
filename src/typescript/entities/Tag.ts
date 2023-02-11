import { z } from 'zod';
import { createTypeFromZodSchema } from '../helpers/createType';

const TagSchema = z.object({
  id: z.string().uuid(),
  tagName: z.string(),
});

const Tag = createTypeFromZodSchema(TagSchema);
export default Tag;
