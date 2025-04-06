import * as z from 'zod'

export const loginSchema = z.object({
    email: z.string().email({
        message: "Coloca un correo electronico valido",
    }),
    password: z.string().min(1, {
        message: "La contraseña es requerida",
    })
})