import { createType } from "./../helpers/createType";
import { z } from "zod";

const UserSchema = z.object({
    id: z.string().uuid(),
    createdAt: z.string().datetime(),
    name: z.string(),
    email: z.string().email(),
    image: z.string(),
});

export const User = createType(UserSchema);
