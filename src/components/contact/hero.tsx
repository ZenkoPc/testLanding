"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

/**
Componente `ContactPageHero` – Sección de presentación animada para la página de contacto.

Renderiza una animación con esferas flotantes tipo "neón" usando `<canvas>` y `Framer Motion`
para mostrar títulos animados. El efecto visual de fondo se adapta a la pantalla y es interactivo con el tamaño del viewport.

Funcionalidades:
- Canvas dinámico que ajusta resolución y tamaño al redimensionar la ventana.
- Animación de esferas con colores y brillo pulsante.
- Mensajes y títulos animados usando `framer-motion`.
- Optimización para rendimiento en dispositivos móviles.

@component
@returns {JSX.Element} Sección animada con mensajes promocionales y visual interactivo.
*/


export function ContactPageHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full size with pixel ratio for sharpness
    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * pixelRatio
      canvas.height = window.innerHeight * pixelRatio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(pixelRatio, pixelRatio)

      // Adjust sphere count based on screen size - we'll call this after defining it
      if (typeof updateSphereCount === "function") {
        updateSphereCount()
      }
    }

    // Neon color palette - darker but still vibrant
    const colors = [
      { r: 100, g: 20, b: 120 }, // Dark fuchsia
      { r: 20, g: 100, b: 130 }, // Dark cyan
      { r: 80, g: 20, b: 80 }, // Dark purple
      { r: 20, g: 80, b: 100 }, // Dark teal
      { r: 100, g: 40, b: 60 }, // Dark rose
    ]

    // Create large blurred spheres
    const spheres: Sphere[] = []

    class Sphere {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: { r: number; g: number; b: number }
      glowIntensity: number
      pulseSpeed: number
      pulsePhase: number

      constructor() {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight
        // Adjust size based on screen width for better mobile performance
        const sizeMultiplier = window.innerWidth < 768 ? 0.7 : 1
        this.size = (Math.random() * 100 + 80) * sizeMultiplier
        // Slower movement for floating effect
        this.speedX = (Math.random() - 0.5) * 0.8
        this.speedY = (Math.random() - 0.5) * 0.8
        this.color = colors[Math.floor(Math.random() * colors.length)]
        // Random glow intensity
        this.glowIntensity = 0.4 + Math.random() * 0.6
        // Pulse effect parameters
        this.pulseSpeed = 0.5 + Math.random() * 1.5
        this.pulsePhase = Math.random() * Math.PI * 2
      }

      update(time: number) {
        // Move the sphere
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges with slight randomization
        if (this.x < -this.size || this.x > window.innerWidth + this.size) {
          this.speedX *= -1
          this.speedX += (Math.random() - 0.5) * 0.2
        }
        if (this.y < -this.size || this.y > window.innerHeight + this.size) {
          this.speedY *= -1
          this.speedY += (Math.random() - 0.5) * 0.2
        }

        // Limit speed
        this.speedX = Math.max(-1, Math.min(1, this.speedX))
        this.speedY = Math.max(-1, Math.min(1, this.speedY))

        // Pulse effect - size and intensity variation over time
        const pulse = Math.sin(time * this.pulseSpeed + this.pulsePhase) * 0.2 + 0.8
        return pulse
      }

      draw(ctx: CanvasRenderingContext2D, pulse: number) {
        // Create a glowing sphere with blur effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * pulse)

        // Core color (more intense)
        gradient.addColorStop(
          0,
          `rgba(${this.color.r + 50}, ${this.color.g + 50}, ${this.color.b + 50}, ${this.glowIntensity * pulse})`,
        )
        // Mid glow
        gradient.addColorStop(
          0.4,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.glowIntensity * 0.6 * pulse})`,
        )
        // Outer glow (very faint)
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`)

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * pulse, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Add a subtle inner highlight for more dimension
        const innerGradient = ctx.createRadialGradient(
          this.x - this.size * 0.3,
          this.y - this.size * 0.3,
          0,
          this.x,
          this.y,
          this.size * 0.8 * pulse,
        )
        innerGradient.addColorStop(0, `rgba(255, 255, 255, ${0.1 * pulse})`)
        innerGradient.addColorStop(1, `rgba(255, 255, 255, 0)`)

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 0.8 * pulse, 0, Math.PI * 2)
        ctx.fillStyle = innerGradient
        ctx.fill()
      }
    }

    // Function to update sphere count based on screen size
    const updateSphereCount = () => {
      // Clear existing spheres
      spheres.length = 0

      // Calculate new count based on screen width
      const newCount = Math.min(15, Math.max(3, Math.floor(window.innerWidth / 200)))

      // Create new spheres
      for (let i = 0; i < newCount; i++) {
        spheres.push(new Sphere())
      }
    }

    // Now call resizeCanvas which will use the defined updateSphereCount function
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation loop
    let animationId: number

    function animate() {
      if (!ctx) return

      // Clear canvas with slight trail effect for smoother transitions
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      const time = performance.now() / 1000

      // Apply blur for a softer look - reduce blur on mobile for better performance
      const blurAmount = window.innerWidth < 768 ? 4 : 8
      ctx.filter = `blur(${blurAmount}px)`

      // Update and draw spheres
      for (const sphere of spheres) {
        const pulse = sphere.update(time)
        sphere.draw(ctx, pulse)
      }

      // Reset filter
      ctx.filter = "none"

      // Add a subtle overlay to enhance the neon effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative w-full h-screen bg-black flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Content */}
      <div className="relative mt-20 md:mt-40 z-10 text-center flex flex-col gap-6 sm:gap-8 md:gap-10 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold"
        >
          Gestiona. Optimiza. Escala.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl text-white/80 font-bold"
        >
          Soluciones inteligentes para la gestión de roles, productos y servicios.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium"
        >
          Nuestro equipo está listo para ayudarte a optimizar tu operación, sin complicaciones. Contáctanos hoy y
          descubre cómo podemos transformar la forma en que tu negocio funciona.
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="space-y-2 sm:space-y-3 md:space-y-4 text-white text-xl sm:text-2xl md:text-3xl font-bold"
        >
          <li>✅ Control total de procesos</li>
          <li>⚙️ Gestión automatizada</li>
          <li>📈 Resultados reales</li>
        </motion.ul>
      </div>
    </section>
  )
}

