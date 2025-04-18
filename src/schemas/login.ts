import * as z from 'zod'

/**
Esquema de validación para el formulario de inicio de sesión.
Valida que el correo sea válido y que la contraseña no esté vacía.
*/

export const loginSchema = z.object({
    email: z.string().email({
        message: "Coloca un correo electronico valido",
    }),
    password: z.string().min(1, {
        message: "La contraseña es requerida",
    })
})