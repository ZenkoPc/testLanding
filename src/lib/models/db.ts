/**
Instancia global de Prisma para evitar múltiples conexiones a la base de datos
durante el desarrollo con recarga en caliente.

Si está en producción, se crea una nueva instancia.
Si está en desarrollo, se reutiliza la instancia global.
*/

import { PrismaClient } from "@prisma/client";

declare global {
    var prisma : PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalThis.prisma = db