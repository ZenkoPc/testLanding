import { TESTIMONIALS } from "@/constants";
import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll"

export function TestimonialsSection() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const testimonialsData = [
    ...TESTIMONIALS,
    ...TESTIMONIALS
  ]

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
                {testimonialsData.map((testimonial, index) => (
                <>
                    <div key={index+'a'} className="px-5"></div>
                    <div
                        key={index}
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
                            src={`/placeholder.svg?height=40&width=40&text=U${
                                (index % 6) + 1
                            }`}
                            alt="Avatar"
                            className="h-full w-full rounded-full"
                            width={40}
                            height={40}
                            />
                        </div>
                        <div>
                            <p className="font-medium">{testimonial.name}</p>
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
