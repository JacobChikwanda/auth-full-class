import * as z from 'zod';

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const RegisterSchema = z.object({
    email: z.string().email({ message: "Email is required" }),
    password: z.string().min(8, { message: "Minimum of 8 characters required" }),
    name: z.string().min(1, { message: "Name is required" })
})