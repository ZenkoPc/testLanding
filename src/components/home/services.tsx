import { ArrowRight, BarChart3, ChevronRight, Code, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { SERVICES } from "@/constants";

export function ServicesSection(){
    return(
        <section className="relative w-full py-20 overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-radial from-[#00ffff1a] to-[#050505] opacity-60"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-white/70 mb-3">SERVICIOS</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-linear-to-r from-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent inline-block">
                  Desarrollo digital y gestión
                </span>
                <span className="text-white"> para empresas con</span>
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">objetivos ambiciosos</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Construye exactamente lo que necesitas, sin complicaciones técnicas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-[#0a0a0a] backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#ff00ff]/30 transition-all duration-300 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Users className="mr-3 h-6 w-6 text-[#ff00ff]" />
                  Gestión de Usuarios
                </h3>
                <p className="text-white/70 mb-8 flex-grow">
                  Trabaja con un sistema completo de roles y permisos. Administra fácilmente quién tiene acceso a qué
                  información, con controles granulares y reportes detallados.
                </p>
                <Button className="rounded-full bg-[#5d3fd3] hover:bg-[#4f35b3] text-white w-fit">
                  Ver más
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-[#0a0a0a] backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-[#00ffff]/30 transition-all duration-300 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <BarChart3 className="mr-3 h-6 w-6 text-[#00ffff]" />
                  Servicios Digitales
                </h3>
                <p className="text-white/70 mb-8 flex-grow">
                  Convierte tu idea en realidad con soporte guiado en todas las etapas. Desde la concepción hasta el
                  lanzamiento, con herramientas potentes para visualizar información.
                </p>
                <Button className="rounded-full bg-[#5d3fd3] hover:bg-[#4f35b3] text-white w-fit">
                  Ver más
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {SERVICES.map((service, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border border-white/10 shadow-lg transition-all hover:shadow-xl bg-[#0a0a0a] backdrop-blur-sm group hover:border-[#ff00ff]/50"
                >
                  <CardContent className="p-6">
                    <div className={`mb-4 ${service.color} p-3 rounded-full w-fit`}>{<service.icon className="h-6 w-6" />}</div>
                    <h3 className={`mb-2 text-xl font-bold text-transparent bg-clip-text inline-block ${service.color}`}>
                      {service.title}
                    </h3>
                    <p className="text-white/70">{service.description}</p>
                    <Button
                      variant="ghost"
                      className={`mt-4 p-0 text-transparent bg-clip-text inline-block ${service.color} font-bold group-hover:underline`}
                    >
                      Saber más <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    )
}