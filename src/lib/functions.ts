'use server'

import { TESTIMONIALS } from "@/constants"

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