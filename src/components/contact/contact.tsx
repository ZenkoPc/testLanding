"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { toast } from "sonner"

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const name = form.nameUser.value
    const email = form.email.value
    const context = form.context.value

    if (name.length < 5 || email.length < 5 || context.length < 5) {
      toast("Coloca la información correctamente para continuar y que nos podamos comunicar contigo!")
    } else {
      toast("Gracias por escribirnos, nos contactaremos lo más pronto posible!")
      form.reset()
    }
  }

  return (
    <section className="w-full py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,255,0.1),#050505,#050505)] opacity-60"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">
                us
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6">
              Agenda una llamada para discutir tu proyecto
            </p>
            <p className="text-white/70 mb-8 max-w-xl text-base sm:text-lg">
              Nuestro equipo está listo para ayudarte a implementar la solución perfecta para tu empresa. Contáctanos hoy mismo y comienza a transformar la gestión de tus servicios.
            </p>
          </div>
          <div className="w-full md:w-1/3 relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#ff00ff]/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-[#00ffff]/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
            
            <div className="bg-[#0a0a0a] backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 relative">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-white/70 text-sm mb-1 block">Nombre</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#ff00ff]/50 focus:outline-none"
                    placeholder="Tu nombre"
                    id="nameUser"
                  />
                </div>
                <div>
                  <label className="text-white/70 text-sm mb-1 block">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#ff00ff]/50 focus:outline-none"
                    placeholder="tu@email.com"
                    id="email"
                  />
                </div>
                <div>
                  <label className="text-white/70 text-sm mb-1 block">Mensaje</label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#ff00ff]/50 focus:outline-none h-32"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    id="context"
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
