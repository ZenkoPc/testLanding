import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function CallToActionSection(){
    return(
        <section className="w-full py-24 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,255,255,0.1),#050505,#050505)] opacity-60"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">
                  ¿Listo para comenzar?
                </h2>
                <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                  Regístrate hoy y descubre cómo nuestra plataforma puede ayudarte a gestionar tus servicios de manera eficiente
                </p>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button className="rounded-full border border-[#ff00ff] bg-transparent text-white hover:bg-[#ff00ff]/10 transition-colors duration-300 px-5 py-2 h-9">
                  Crear cuenta
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button className="rounded-full border border-[#00ffff] bg-transparent text-white hover:bg-[#00ffff]/10 transition-colors duration-300 px-5 py-2 h-9">
                  Contactar con ventas
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
    )
}