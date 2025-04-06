import * as z from 'zod'

export const registerSchema = z.object({
  firstName: z.string().min(1, "Por favor, introduce tu nombre"),
  lastName: z.string().min(1, "Por favor, introduce tu apellido"),
  email: z.string().email("Por favor, introduce un correo electrónico válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres")
    .regex(/[A-Z]/, "Debe tener al menos una letra mayúscula")
    .regex(/[a-z]/, "Debe tener al menos una letra minúscula")
    .regex(/[0-9]/, "Debe tener al menos un número")
    .regex(/[^A-Za-z0-9]/, "Debe tener al menos un carácter especial"),
});