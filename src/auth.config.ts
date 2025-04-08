import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./schemas/login";
import { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./user/user";
import bcrypt from "bcryptjs"

/**
Configuración de NextAuth utilizando el proveedor de credenciales.

- Utiliza `loginSchema` para validar los campos recibidos.
- Verifica si el usuario existe y si la contraseña ingresada coincide con la almacenada.
- Retorna el usuario si las credenciales son válidas, o `null` en caso contrario.
*/

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = loginSchema.safeParse(credentials)
                
                if(validatedFields.success){
                    const { email, password } = validatedFields.data

                    const user = await getUserByEmail(email)

                    if(!user || !user.password) return null
                    
                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password
                    )
                    
                    if(passwordsMatch) return user
                }

                return null
            }
        })
    ]
} satisfies NextAuthConfig