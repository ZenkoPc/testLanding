import * as z from "zod";

export const updateUser = z.object({
    firstname: z.string().min(2, {
        message: "Please input a valid name."
    }),
    lastname: z.string().min(2, {
        message: "Please input a valid name."
    }),
    age: z.number().min(18, {
        message: "Please input a valid age."
    }).max(99, {
        message: "Age exceeded the age limit."
    }),
    image: z.string().optional()
})