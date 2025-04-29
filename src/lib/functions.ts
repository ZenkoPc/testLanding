'use server'

import { TESTIMONIALS } from "@/constants"
import { db } from "./models/db"
import bcrypt from "bcryptjs"

/**
Recupera testimonios desde la API externa de usuarios aleatorios y los adapta
para combinar con los testimonios predefinidos.

Si la API falla o no devuelve resultados, retorna los testimonios por defecto.
Duplica el arreglo final para permitir un carrusel infinito.
*/

export async function retrieveTestimonials(){
    const request = await fetch('https://randomuser.me/api/?results=6')
    const data = await request.json()

    if(!data.results || !request.ok) return TESTIMONIALS

    const tamedTestimonials = data.results.map((user: any, index: number) => {
        return {
            ...TESTIMONIALS[index],
            name: user.name.first + " " + user.name.last,
            image: user.picture.large,
        }
    })

    //cuz of the infinite carousel
    return [
        ...tamedTestimonials,
        ...tamedTestimonials
    ]
}

export async function setAdmin(){
    const existingUser = await db.user.findFirst({
        where: {
            role: "ADMIN"
        }
    })

    if(!existingUser){
        const hashedPass = await bcrypt.hash("Soyeladmin1.", 10)
        await db.user.create({
            data: {
                firstName: "Andres",
                lastName: "Obando",
                email: "andres@gmail.com",
                password: hashedPass,
                role: "ADMIN",
                age: 22,
                createdAt: new Date()
            }
        })
    }

    return true
}