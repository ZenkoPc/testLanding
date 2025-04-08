import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { SUCCESS_CASES } from "@/constants";
import { Card } from "../ui/card";
import { BorderBeam } from "../magicui/border-beam";

/**
Componente `SuccessCasesSection` – Sección de presentación de casos de éxito.

Muestra testimonios y resultados clave de clientes anteriores utilizando tarjetas dinámicas 
basadas en los datos del arreglo `SUCCESS_CASES`.

Características:
- Encabezado destacado con cita inspiradora.
- Tres tarjetas con título, descripción, estadística destacada y una animación decorativa (`BorderBeam`).
- Fondo degradado y efectos de escala al pasar el cursor.

@returns {JSX.Element} Sección de testimonios con estadísticas visuales.
*/

export function SuccessCasesSection() {
  return (
    <section className="relative w-full overflow-visible border-t border-white/5">
      <div className="w-full py-20 px-4 md:px-6 relative z-10 bg-linear-to-r from-[#831da1] to-[#192ff1]">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-3">
            CASOS DE ÉXITO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
            "La capacidad de <span className="text-white">ServiciosPro</span>{" "}
            para entender nuestra misión y la complejidad de nuestros requisitos
            fue
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#69c3ff] to-[#f31859]">
              {" "}
              excepcional
            </span>
            "
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {SUCCESS_CASES.map((succ_case, index) => (
            <Card
              key={index}
              className="bg-[#0a0a0a] hover:scale-105 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-[#ff00ff]/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {succ_case.title}
              </h3>
              <p className="text-white/70 mb-6">{succ_case.description}</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">
                    {succ_case.stat}
                  </p>
                  <p className="text-sm text-white/70">{succ_case.statLabel}</p>
                </div>
              </div>
              <BorderBeam
              key={index+"bx"}
                duration={10}
                size={400}
                className="from-transparent via-red-500 to-transparent"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
