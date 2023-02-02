import { createTypeFromZodSchema } from "./../helpers/createType";
import { Question } from "./Question";
import { z } from "zod";

const NewAnswerSchema = z.object({
    answer: z.string(),
    relatedQuestion: Question,
});

export const NewAnswer = createTypeFromZodSchema(NewAnswerSchema);
