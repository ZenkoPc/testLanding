"use client"

import { HomeHero } from "@/components/home/hero"
import { SuccessCasesSection } from "@/components/home/success"
import { ServicesSection } from "@/components/home/services"
import { TestimonialsSection } from "@/components/home/testimonials"
import { CallToActionSection } from "@/components/home/calltoaction"

/**
Componente `Home` – Página de inicio de la plataforma.

Esta página reúne secciones informativas clave sobre los servicios ofrecidos,
incluyendo casos de éxito, servicios, testimonios de usuarios y un llamado a la acción.

Componentes incluidos:
- `HomeHero`: Sección principal de bienvenida.
- `SuccessCasesSection`: Casos de éxito destacados.
- `ServicesSection`: Servicios disponibles.
- `TestimonialsSection`: Opiniones de usuarios.
- `CallToActionSection`: Invitación a unirse o contactar.

@component
@returns {JSX.Element} Página de inicio.
*/


export default function Home() {

  return (
    <main className="flex-1 pt-16 relative z-10">
        <HomeHero />
        <SuccessCasesSection />
        <ServicesSection />
        <TestimonialsSection />
        <CallToActionSection />
    </main>
  )
}

