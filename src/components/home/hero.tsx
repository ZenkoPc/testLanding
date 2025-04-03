import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function HomeHero(){
    return(
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-radial from-[#ff00ff]/20 via-[#050505] to-[#050505] opacity-60"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] inline-block sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                Gestiona tus servicios
                <div className="inline-flex flex-wrap justify-center gap-2 mt-2">
                  <span className="text-white">desde</span>
                  <div className="inline-block rounded-lg bg-white/5 px-4 py-1 border-[#ff00ff]/30">
                    <span className="mr-2 text-white">🔐</span>
                    <span>registro</span>
                  </div>
                  <span className="text-white">hasta</span>
                  <div className="inline-block rounded-lg bg-white/5 px-4 py-1 border-[#00ffff]/30">
                    <span className="mr-2 text-white">🚀</span>
                    <span className="">gestión</span>
                  </div>
                </div>
              </h1>
              <p className="mt-6 text-xl text-white/70 md:text-2xl">
                Sin complicaciones, con roles de usuario y una interfaz intuitiva.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <Button className="rounded-full border border-white bg-transparent text-white hover:bg-white/10 transition-colors duration-300 px-5 py-2 h-9">
                  Administrador
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button className="rounded-full border border-white bg-transparent text-white hover:bg-white/10 transition-colors duration-300 px-5 py-2 h-9">
                  Visualizador
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
    )
}