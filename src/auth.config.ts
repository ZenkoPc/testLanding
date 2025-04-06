import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./schemas/login";
import { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./user/user";
import bcrypt from "bcryptjs"

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = loginSchema.safeParse(credentials)

                if(validatedFields.success){
                    const { email, password } = validatedFields.data

                    //get db validation
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