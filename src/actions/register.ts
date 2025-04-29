"use server"

import { registerSchema } from "@/schemas/register"
import { getUserByEmail } from "@/user/user"
import * as z from "zod"
import bcrypt from "bcryptjs"
import { db } from "@/lib/models/db"
import { signIn } from "@/auth"
import { AuthError } from "next-auth"

/**
Registra un nuevo usuario utilizando los datos del formulario.

Esta función valida los campos ingresados con `registerSchema`,
verifica si ya existe una cuenta con el correo proporcionado, 
hashea la contraseña, crea el nuevo usuario en la base de datos
y luego inicia sesión automáticamente. */

export async function RegisterCredentials(values: z.infer<typeof registerSchema>){

    const validatedFields = registerSchema.safeParse(values)

    if(!validatedFields.success) return {
        error: validatedFields.error
    }

    const { email, password, firstName, lastName } = validatedFields.data

    const existingUser = await getUserByEmail(email)

    if(existingUser) return {
        error: "Este correo ya esta registrado, intenta con otro"
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = await db.user.create({
        data: {
            email,
            password: hashPassword,
            firstName,
            lastName,
            role: "USER",
        }
    })

    if(!newUser) return {
        error: "No se pudo crear la cuenta, intenta mas tarde"
    }

    try{
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
            redirectTo: "/dashboard/users"
        })
        return {
            success: "Cuenta creada correctamente, iniciando sesion...",
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