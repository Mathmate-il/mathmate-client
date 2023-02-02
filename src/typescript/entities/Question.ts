import { createType } from "./../helpers/createType";
import { z } from "zod";
import { User } from "./User";

const QuestionSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.string().datetime(),
    title: z.string(),
    question: z.string(),
    owner: User,
});

export const Question = createType(QuestionSchema);
