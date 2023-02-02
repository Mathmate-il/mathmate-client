import { Tag } from "./Tag";
import { createType } from "./../helpers/createType";
import { z } from "zod";
import { User } from "./User";

const QuestionSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.string().datetime(),
    title: z.string(),
    question: z.string(),
    owner: User,
    tags: z.array(Tag),
    rating: z.number(),
});

export const Question = createType(QuestionSchema);
