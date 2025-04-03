import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { SUCCESS_CASES } from "@/constants";

export function SuccessCasesSection(){
    return(
        <section className="relative w-full py-20 overflow-hidden border-t border-white/5">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,255,0.1),#050505,#050505)] opacity-60"
          ></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-white/70 mb-3">CASOS DE ÉXITO</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
                "La capacidad de <span className="text-white">ServiciosPro</span> para entender nuestra misión y la
                complejidad de nuestros requisitos fue
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">
                  excepcional
                </span>"
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {SUCCESS_CASES.map((succ_case, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a] backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-[#ff00ff]/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{succ_case.title}</h3>
                  <p className="text-white/70 mb-6">{succ_case.description}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">
                        {succ_case.stat}
                      </p>
                      <p className="text-sm text-white/70">{succ_case.statLabel}</p>
                    </div>
                    <Button variant="ghost" className="text-white hover:text-[#ff00ff] p-0">
                      Ver caso <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    )
}