import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { PAGES_LINKS } from "@/constants";

/**
Componente `HomeHero` – Sección introductoria de la página principal.

Presenta un mensaje principal llamativo con un diseño visual atractivo y responsivo.

Estructura:
- Fondo con gradiente radial animado.
- Título grande con texto en gradiente, acompañado de bloques visuales que representan etapas del proceso (registro y gestión).
- Subtítulo con descripción breve de beneficios.
- Botón de llamada a la acción que redirige al primer enlace de `PAGES_LINKS`.

@returns {JSX.Element} Sección hero visualmente destacada con llamada a la acción.
*/

export function HomeHero(){
    return(
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-radial from-[#ff00ff]/20 via-[#050505] to-[#050505] opacity-60"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] inline-block sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Gestiona tus servicios
                <div className="inline-flex flex-wrap justify-center gap-2 mt-2">
                  <span className="text-white">
                    desde
                  </span>
                  <div className="inline-block rounded-lg bg-white/5 px-4 py-1 border-[#ff00ff]/30">
                    <span className="mr-2 text-white">
                        🔐
                    </span>
                    <span>
                        registro
                    </span>
                  </div>
                  <span className="text-white">
                    hasta
                </span>
                  <div className="inline-block rounded-lg bg-white/5 px-4 py-1 border-[#00ffff]/30">
                    <span className="mr-2 text-white">
                        🚀
                    </span>
                    <span className="">
                        gestión
                    </span>
                  </div>
                </div>
              </h1>
              <p className="mt-6 text-xl text-white/70 md:text-2xl">
                Sin complicaciones, con roles de usuario y una interfaz intuitiva.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Link href={PAGES_LINKS[0].url}>
                    <Button className="rounded-full border cursor-pointer hover:scale-105 transition-all border-white bg-transparent text-white hover:bg-white/10 duration-300 px-5 py-2 h-9">
                        {PAGES_LINKS[0].slug}
                        <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
    )
}