"use server"

import { signIn } from "@/auth"
import { loginSchema } from "@/schemas/login"
import { getUserByEmail } from "@/user/user"
import { AuthError } from "next-auth"
import * as z from "zod"

export async function LoginCredentials(values: z.infer<typeof loginSchema>){

    const validatedFields = loginSchema.safeParse(values)

    if(!validatedFields.success) return {
        error: validatedFields.error,
    }

    const { email, password } = validatedFields.data

    const existingUser = await getUserByEmail(email)

    if(!existingUser || !existingUser.email || !existingUser.password) return {
        error: "No se encontro una cuenta con estas caracteristicas, contacta a soporte tecnico para mas informacion"
    }

    if(existingUser.role === "ADMIN"){
        try{
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
                redirectTo: "/admin/dashboard"
            })
            return {
                success: "Sesion iniciada correctamente",
                data: res
            }
        }catch(err){
            if(err instanceof AuthError){
                switch(err.type){
                    case "CredentialsSignin":
                        return {
                            error: "Datos invalidos, verifica tu correo y contraseña"
                        }
                    default:
                       return {
                        error: "Algo ha salido mal, intenta mas tarde."
                       } 
                }
            }
    
            throw err;
        }
    }else{
        try{
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
                redirectTo: "/dashboard"
            })
            return {
                success: "Sesion iniciada correctamente",
                data: res
            }
        }catch(err){
            if(err instanceof AuthError){
                switch(err.type){
                    case "CredentialsSignin":
                        return {
                            error: "Datos invalidos, verifica tu correo y contraseña"
                        }
                    default:
                       return {
                        error: "Algo ha salido mal, intenta mas tarde."
                       } 
                }
            }
    
            throw err;
        }
    }

}