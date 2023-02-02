import { z } from "zod";

export const createType = <T extends z.ZodType<any, any, any>>(schema: T) => {
    type GenericZodType = T;
    interface IGeneric extends GenericZodType {}
    const type: z.ZodType<IGeneric> = schema;
    return type;
};
