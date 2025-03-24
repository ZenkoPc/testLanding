"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ArrowRight, ExternalLink, Users, BarChart3, Code, Zap } from "lucide-react"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!testimonialsRef.current) return

    const scrollContainer = testimonialsRef.current
    const scrollWidth = scrollContainer.scrollWidth

    let scrollPos = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPos += scrollSpeed
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0
      }
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPos
      }
      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animation)
  }, [])

  const testimonials = [
    {
      text: "Esta plataforma ha transformado la manera en que gestionamos nuestros servicios. La interfaz es intuitiva y los roles de usuario nos permiten controlar perfectamente quién accede a qué información.",
      name: "Cliente Satisfecho 1",
      company: "Empresa 1",
    },
    {
      text: "Increíble herramienta para la gestión de servicios. Nos ha permitido optimizar nuestros procesos y mejorar la comunicación entre equipos.",
      name: "Cliente Satisfecho 2",
      company: "Empresa 2",
    },
    {
      text: "La mejor inversión que hemos hecho este año. El sistema de roles es exactamente lo que necesitábamos para nuestro equipo distribuido.",
      name: "Cliente Satisfecho 3",
      company: "Empresa 3",
    },
    {
      text: "Excelente plataforma, fácil de usar y con todas las funcionalidades que necesitamos. El soporte técnico es excepcional.",
      name: "Cliente Satisfecho 4",
      company: "Empresa 4",
    },
    {
      text: "Hemos aumentado nuestra productividad en un 30% desde que empezamos a usar esta plataforma. Totalmente recomendada.",
      name: "Cliente Satisfecho 5",
      company: "Empresa 5",
    },
    {
      text: "La gestión de información nunca había sido tan sencilla. Gracias a esta plataforma, podemos centrarnos en lo que realmente importa.",
      name: "Cliente Satisfecho 6",
      company: "Empresa 6",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#050505]">
      {/* Header/Navigation - Transparent initially, blur on scroll */}
      <header
        className={`fixed top-0 z-50 w-full py-4 transition-all duration-300 ${scrolled ? "bg-[#050505]/80 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full [background:linear-gradient(to_right,#ff00ff,#00ffff)]`}
            >
              <span className="text-xl font-bold text-white">S/</span>
            </div>
            <span className="hidden text-xl font-bold text-white sm:inline-block">ServiciosPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-white border-b-2 border-[#ff00ff] pb-1">
              Home
            </Link>
            <div className="relative group">
              <Link
                href="/servicios"
                className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white"
              >
                Servicios
                <ChevronRight className="h-4 w-4 rotate-90 opacity-70" />
              </Link>
            </div>
            <Link href="/portfolio" className="text-sm font-medium text-white/80 hover:text-white">
              Portfolio
            </Link>
            <Link href="/nosotros" className="text-sm font-medium text-white/80 hover:text-white">
              Sobre nosotros
            </Link>
            <Link href="/trabajo" className="text-sm font-medium text-white/80 hover:text-white">
              Trabaja con nosotros
            </Link>
          </nav>
          <div>
            <Link href="/contacto">
              <Button className="rounded-full border border-white bg-transparent text-white hover:bg-white/10 transition-colors duration-300 px-5 py-2 h-9">
                Contacto
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16 relative z-10">
        {/* Hero Section */}
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

        {/* New Case Studies Section */}
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
              {[
                {
                  title: "Empresa Tecnológica",
                  description:
                    "Implementación de sistema de gestión con roles personalizados para equipo de 50+ personas.",
                  stat: "+40%",
                  statLabel: "Productividad",
                },
                {
                  title: "Startup Financiera",
                  description:
                    "Desarrollo de plataforma segura para gestión de información sensible con múltiples niveles de acceso.",
                  stat: "-30%",
                  statLabel: "Tiempo de gestión",
                },
                {
                  title: "Agencia Gubernamental",
                  description: "Sistema de administración de servicios públicos con trazabilidad y reportes avanzados.",
                  stat: "99.9%",
                  statLabel: "Disponibilidad",
                },
              ].map((case_study, i) => (
                <div
                  key={i}
                  className="bg-[#0a0a0a] backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-[#ff00ff]/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{case_study.title}</h3>
                  <p className="text-white/70 mb-6">{case_study.description}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">
                        {case_study.stat}
                      </p>
                      <p className="text-sm text-white/70">{case_study.statLabel}</p>
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

        {/* Services Section */}
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
              {[
                {
                  title: "Gestión de Usuarios",
                  description: "Sistema completo de roles y permisos para administrar el acceso a la información.",
                  icon: <Users className="h-6 w-6" />,
                  color: "bg-linear-to-r from-[#ff00ff] to-[#ff66ff]",
                },
                {
                  title: "Gestión de Información",
                  description: "Herramientas potentes para crear, actualizar, eliminar y visualizar información.",
                  icon: <Code className="h-6 w-6" />,
                  color: "bg-linear-to-r from-[#00ffff] to-[#66ffff]",
                },
                {
                  title: "Reportes Avanzados",
                  description: "Genera informes detallados y visualiza estadísticas para tomar decisiones.",
                  icon: <BarChart3 className="h-6 w-6" />,
                  color: "bg-linear-to-r from-[#ff00ff] to-[#00ffff]",
                },
              ].map((service, i) => (
                <Card
                  key={i}
                  className="overflow-hidden border border-white/10 shadow-lg transition-all hover:shadow-xl bg-[#0a0a0a] backdrop-blur-sm group hover:border-[#ff00ff]/50"
                >
                  <CardContent className="p-6">
                    <div className={`mb-4 ${service.color} p-3 rounded-full w-fit`}>{service.icon}</div>
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

        {/* Testimonials Section with Angled Slider */}
        <section className="w-full py-24 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-radial from-[#ff00ff33] to-[#050505] opacity-60"></div>

          <div className="container px-4 md:px-6 relative z-10 mt-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-white/70">TESTIMONIOS</p>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent">
                Lo que dicen nuestros clientes
              </h2>
              <p className="max-w-[900px] text-white/70 md:text-xl/relaxed">
                Descubre por qué nuestros usuarios confían en nuestra plataforma
              </p>
            </div>

            {/* Angled testimonials slider - 5 DEGREES */}
            <div className="relative w-full overflow-hidden rotate-[-5deg]">
              <div
                ref={testimonialsRef}
                className="flex gap-6 py-8 overflow-x-auto scrollbar-hide w-[200%]"
              >
                {/* Double the testimonials for infinite scroll effect */}
                {[...testimonials, ...testimonials].map((testimonial, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-80 rounded-xl border border-white/10 bg-[#0a0a0a] backdrop-blur-sm p-6 text-white hover:border-[#ff00ff]/50 transition-colors duration-300 rotate-[5deg]"
                  >
                    <div className="mb-4 text-yellow-400 flex">{"\u2605\u2605\u2605\u2605\u2605"}</div>
                    <p className="mb-6 italic text-white/90 h-32 overflow-hidden">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full border border-[#ff00ff] p-0.5 overflow-hidden">
                        <img
                          src={`/placeholder.svg?height=40&width=40&text=U${(i % 6) + 1}`}
                          alt="Avatar"
                          className="h-full w-full rounded-full"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-white/70">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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

        {/* New Contact Section */}
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
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#050505] text-white border-t border-white/10">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full [background:linear-gradient(to_right,#ff00ff,#00ffff)]`}
                >
                  <span className="text-xl font-bold text-white">S/</span>
                </div>
                <span className="text-xl font-bold text-white">ServiciosPro</span>
              </div>
              <p className="text-white/70">Soluciones de gestión para empresas de todos los tamaños.</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Plataforma</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Guías
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Carreras
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/70">
            <p>© 2024 ServiciosPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

