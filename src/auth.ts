import NextAuth, { DefaultSession } from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/models/db"
import { getUserById } from "./user/user"

type ExtendedUser = DefaultSession["user"] & {
    role: "ADMIN" | "USER" | unknown
}

declare module "next-auth"{
    interface Session {
      user: ExtendedUser
    }
}

/**
Configuración principal de NextAuth con adaptador Prisma.

- Se extiende el objeto `session.user` para incluir el rol del usuario.
- `signIn`: Permite el acceso solo si el usuario existe y usa proveedor de credenciales.
- `session`: Añade el `id`, `role` y `name` del usuario al objeto de sesión.
- `jwt`: Incluye información del usuario en el token (rol y nombre completo).
- Se utiliza JWT como estrategia de sesión.
*/

export const { handlers, signIn, signOut, auth } = NextAuth({
    callbacks: {
        async signIn({ user, account }){
            if(account?.provider !== "credentials") return false
            
            const existingUser = await getUserById(user.id as string)

            if(!existingUser) return false

            return true
        },
        async session({ token, session }){
            if(session.user && token.sub){
                session.user.id = token.sub
            }

            if(token.role && session.user){
                session.user.role = token.role
            }

            if(token.name && session.user){
                session.user.name = token.name
            }

            return session
        },
        async jwt({ token }){
            if(!token.sub) return token

            const existingUser = await getUserById(token.sub)

            if(!existingUser) return token

            token.role = existingUser.role
            token.name = existingUser.firstName + " " + existingUser.lastName

            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt"
    },
    ...authConfig
})