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

            return session
        },
        async jwt({ token }){
            if(!token.sub) return token

            const existingUser = await getUserById(token.sub)

            if(!existingUser) return token

            token.role = existingUser.role

            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt"
    },
    ...authConfig
})