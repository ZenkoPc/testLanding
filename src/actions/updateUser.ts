"use server"

import { auth } from "@/auth"
import { db } from "@/lib/models/db"
import { updateUser } from "@/schemas/updateUser"
import * as z from "zod"

export async function UpdateUser(values: z.infer<typeof updateUser>){

    const session = await auth()

    if(!session?.user) return {
        error: "Session not valid."
    }

    const validatedInputs = updateUser.safeParse(values)

    if(!validatedInputs.success) return {
        error: validatedInputs.error.errors[0].message
    }

    const existingUser = await db.user.findUnique({
        where: {
            email: session.user.email as string
        }
    })

    if(!existingUser) return {
        error: "User not valid."
    }

    const updatedUser = await db.user.update({
        where: {
            id: existingUser.id
        },
        data: {
           firstName: validatedInputs.data.firstname,
           lastName: validatedInputs.data.lastname,
           age: validatedInputs.data.age,
           image: validatedInputs.data.image
        }
    })

    if(!updatedUser) return {
        error: "Somthing happened while updating the user."
    }

    return {
        success: {
            firstname: updatedUser.firstName,
            lastname: updatedUser.lastName,
            email: updatedUser.email,
            age: updatedUser.age,
            image: updatedUser.image
        }
    }


}