'use server'

import { TESTIMONIALS } from "@/constants"

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