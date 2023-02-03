import { z } from "zod";

export const createTypeFromZodSchema = <T extends z.ZodType<any, any, any>>(
    schema: T
) => {
    type ZodObjectType = T extends z.ZodType<infer U, any, any> ? U : never;
    const type: z.ZodType<ZodObjectType> = schema;
    return type;
};
