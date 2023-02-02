import { createType } from "./../helpers/createType";
import { z } from "zod";
import { Tag } from "./Tag";

const NewQuestionSchema = z.object({
    title: z.string(),
    question: z.string(),
    tags: z.array(Tag),
});

export const NewQuestion = createType(NewQuestionSchema);
