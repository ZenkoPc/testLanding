import { db } from "@/lib/models/db";

/**
Funciones para obtener un usuario desde la base de datos utilizando Prisma.
- `getUserByEmail`: busca un usuario por su correo electrónico.
- `getUserById`: busca un usuario por su ID único.
Ambas funciones retornan `null` en caso de error o si no se encuentra el usuario.
*/

export async function getUserByEmail(email: string){
    try{
        const user = await db.user.findUnique({
            where: {
                email
            }
        })

        return user
    }catch{
        return null
    }
}

export async function getUserById(id: string){
    try{
        const user = await db.user.findUnique({
            where: {
                id
            }
        })

        return user
    }catch{
        return null
    }
}