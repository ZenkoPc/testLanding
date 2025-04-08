import { ContactSection } from "@/components/contact/contact";
import { ContactPageHero } from "@/components/contact/hero";

/**
Componente `ContactPage` – Página de Contacto.

Esta página contiene la interfaz de contacto de la plataforma, incluyendo un encabezado (hero) y una sección de formulario de contacto.

Funcionalidades:
- Muestra el componente `ContactPageHero` como introducción visual.
- Renderiza la sección de contacto `ContactSection` con detalles o formulario.
- Aplica estilos para estructura y color del contenido.

@component
@returns {JSX.Element} Interfaz completa de la página de contacto.
*/

export default function ContactPage(){
    return (
        <main className="flex-1 flex flex-col relative z-10 [&>a]:text-white">
            <ContactPageHero />
            <ContactSection />
        </main>
    )
}