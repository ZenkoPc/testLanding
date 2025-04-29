"use server"

import { auth } from "@/auth"
import { db } from "@/lib/models/db"
import { createUserAdmin, updateUserAdmin } from "@/schemas/updateUser"
import bcrypt from "bcryptjs"
import { revalidatePath } from "next/cache"
import * as z from "zod"

export async function GetUsers(){

    const session = await auth()

    if(!session || session.user.role !== "ADMIN") throw new Error("Session Not Valid.")

    const users = await db.user.findMany({
        omit: {
            password: true
        },
        where: {
            role: "USER"
        }
    })

    return users.length > 0 ? users : []

}

export async function UpdateUser(values: z.infer<typeof updateUserAdmin>){

    const session = await auth()

    if(!session || session.user.role !== "ADMIN") throw new Error("Session Not Valid.")

    const validatedFields = updateUserAdmin.safeParse(values)

    if(!validatedFields.success) throw new Error(validatedFields.error.errors[0].message)
    
    const existingUser = await db.user.findUnique({
        where: {
            email: validatedFields.data.email
        }
    })

    if(!existingUser) throw new Error("User not found.")

    const updatedUser = await db.user.update({
        where: {
            id: existingUser.id
        },
        data: {
            ...values
        },
        omit: {
            password: true
        }
    })

    if(!updatedUser) throw new Error("User could not be updated.")

    revalidatePath("/dashboard/admin")

}

export async function DeleteUser(id: string){

    const session = await auth()

    if(!session || session.user.role !== "ADMIN") throw new Error("Session Not Valid.")

    const deletedUser = await db.user.delete({
        where: {
            id
        }
    })

    if(!deletedUser) throw new Error("User could not be deleted")

    revalidatePath("/dashboard/admin")

}

export async function CreateUser(values: z.infer<typeof createUserAdmin>){

    const session = await auth()

    if(!session || session.user.role !== "ADMIN") throw new Error("Session Not Valid.")

    const validatedFields = createUserAdmin.safeParse(values)

    if(!validatedFields.success) throw new Error(validatedFields.error.errors[0].message)
        
    const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10)

    const newUser = await db.user.create({
        data: {
            ...validatedFields.data,
            password: hashedPassword
        }
    })

    if(!newUser) throw new Error("User could not be created.")

    revalidatePath("/dashboard/admin")

}