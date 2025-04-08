import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent } from "../ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll"
import { retrieveTestimonials } from "@/lib/functions";
import { TESTIMONIALS } from "@/constants";

/**
Componente `TestimonialsSection` – Sección de testimonios de clientes.

Presenta una sección de carrusel con testimonios cargados dinámicamente usando `retrieveTestimonials`.
Muestra una animación de carga mientras se obtienen los datos y luego un carrusel que se desliza automáticamente,
utilizando la librería `embla-carousel-auto-scroll`.

Características:
- Encabezado con título y descripción.
- Efecto de desplazamiento automático en el carrusel.
- Cada testimonio incluye texto, avatar, nombre y empresa.
- Estilizado con fondo degradado, animaciones suaves y efectos de hover.

@returns {JSX.Element} Sección visualmente atractiva de testimonios en carrusel.
*/

export function TestimonialsSection() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [testimonials, setTestimonials] = useState<typeof TESTIMONIALS>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    retrieveTestimonials()
        .then((data) => setTestimonials(data))
        .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!testimonialsRef.current) return;

    const scrollContainer = testimonialsRef.current;
    const scrollWidth = scrollContainer.scrollWidth;

    let scrollPos = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPos += scrollSpeed;
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0;
      }
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPos;
      }
      requestAnimationFrame(scroll);
    };

    const animation = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="w-full py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-radial from-[#ff00ff33] to-[#050505] opacity-60"></div>
      <div className="px-4 md:px-6 relative z-10 mt-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-white/70">
            TESTIMONIOS
          </p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent">
            Lo que dicen nuestros clientes
          </h2>
          <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
            Descubre por qué nuestros usuarios confían en nuestra plataforma
          </p>
        </div>
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                AutoScroll({
                    playOnInit: true,
                    stopOnInteraction: false,
                })
              ]}
            className="w-full"
            >
            <CarouselContent className="w-full mx-0">
                {loading && (
                    <div className="container">
                        <div className="flex items-center justify-center h-32">
                            <div className="animate-spin rounded-full size-18 border-b-2 border-[#ff00ff] text-red-500"></div>
                        </div>
                        <p className="text-white text-center">
                            Cargando testimonios...
                        </p>
                    </div>
                )}
                {!loading && testimonials.map((testimonial, index) => (
                <>
                    <div key={index+'ax'} className="px-5"></div>
                    <div
                        key={index+'bx'}
                        className="flex-shrink-0 w-80 rounded-xl border border-white/10 bg-[#0a0a0a] backdrop-blur-sm p-6 text-white hover:border-[#ff00ff]/50 transition-colors duration-300"
                    >
                        <div className="mb-4 text-yellow-400 flex">
                            {"\u2605\u2605\u2605\u2605\u2605"}
                        </div>
                        <p className="mb-6 italic text-white/90 h-32 overflow-hidden">
                            "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full border border-[#ff00ff] p-0.5 overflow-hidden">
                                <img
                                    src={testimonial.image}
                                    alt="Avatar"
                                    className="h-full w-full rounded-full"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div>
                                <p className="font-medium">
                                    {testimonial.name}
                                </p>
                                <p className="text-sm text-white/70">
                                    {testimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
                ))}
            </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
