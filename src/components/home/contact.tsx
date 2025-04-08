import { ChevronRight, ExternalLink, Zap } from "lucide-react";
import { Button } from "../ui/button";

/**
Componente `ContactSection` – Sección de contacto con formulario y botones de acción.

Presenta una interfaz atractiva para que los usuarios puedan comunicarse con el equipo
a través de un formulario o mediante botones para contacto directo o visualización de una demo.

Características:
- Título con efecto de gradiente animado.
- Descripción informativa sobre el soporte y disponibilidad del equipo.
- Botones interactivos para "Contactar ahora" y "Ver demo".
- Formulario de contacto con campos: nombre, email y mensaje.
- Efectos visuales con animaciones, desenfoques y gradientes.

@returns {JSX.Element} Sección visual con formulario y botones para contactar al equipo.
*/

export function ContactSection(){
    return(
        <section className="w-full py-24 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,255,0.1),#050505,#050505)] opacity-60"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-2/3">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                  Contact
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">
                    us
                  </span>
                </h2>
                <p className="text-2xl md:text-3xl text-white/80 mb-8">
                  Agenda una llamada para discutir tu proyecto
                </p>
                <p className="text-white/70 mb-8 max-w-xl">
                  Nuestro equipo está listo para ayudarte a implementar la solución perfecta para tu empresa.
                  Contáctanos hoy mismo y comienza a transformar la gestión de tus servicios.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="rounded-full bg-[#5d3fd3] hover:bg-[#4f35b3] text-white px-6 py-3 h-auto text-lg">
                    Contactar ahora
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                  <Button className="rounded-full border border-white bg-transparent text-white hover:bg-white/10 transition-colors duration-300 px-6 py-3 h-auto text-lg">
                    Ver demo
                    <Zap className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 relative">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#ff00ff]/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-[#00ffff]/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                <div className="bg-[#0a0a0a] backdrop-blur-md border border-white/10 rounded-xl p-8 relative">
                  <form className="space-y-4">
                    <div>
                      <label className="text-white/70 text-sm mb-1 block">Nombre</label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#ff00ff]/50 focus:outline-none"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-1 block">Email</label>
                      <input
                        type="email"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#ff00ff]/50 focus:outline-none"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-sm mb-1 block">Mensaje</label>
                      <textarea
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#ff00ff]/50 focus:outline-none h-32"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      ></textarea>
                    </div>
                    <Button className="rounded-full bg-[#5d3fd3] hover:bg-[#4f35b3] text-white w-full">
                      Enviar mensaje
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}