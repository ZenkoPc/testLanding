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

export const updateUserAdmin = z.object({
    firstName: z.string().min(2, {
        message: "Please input a valid name."
    }),
    lastName: z.string().min(2, {
        message: "Please input a valid name."
    }),
    age: z.number().min(18, {
        message: "Please input a valid age."
    }).max(99, {
        message: "Age exceeded the age limit."
    }),
    email: z.string().email({
        message: "Input a valid email."
    }),
    role: z.enum(["ADMIN", "USER"])
})

export const createUserAdmin = z.object({
    firstName: z.string().min(2, {
        message: "Please input a valid name."
    }),
    lastName: z.string().min(2, {
        message: "Please input a valid name."
    }),
    age: z.number().min(18, {
        message: "Please input a valid age."
    }).max(99, {
        message: "Age exceeded the age limit."
    }),
    email: z.string().email({
        message: "Input a valid email."
    }),
    role: z.enum(["ADMIN", "USER"]),
    password: z.string().min(8, {
        message: "Password not valid."
    }).max(25, {
        message: "Password too long."
    })
})