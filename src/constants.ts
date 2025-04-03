import { BarChart3, Code, Users } from "lucide-react"

export const SUCCESS_CASES = [
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
    }
]

export const SERVICES = [
    {
        title: "Gestión de Usuarios",
        description: "Sistema completo de roles y permisos para administrar el acceso a la información.",
        icon: Users,
        color: "bg-linear-to-r from-[#ff00ff] to-[#ff66ff]",
    },
    {
        title: "Gestión de Información",
        description: "Herramientas potentes para crear, actualizar, eliminar y visualizar información.",
        icon: Code,
        color: "bg-linear-to-r from-[#00ffff] to-[#66ffff]",
    },
    {
        title: "Reportes Avanzados",
        description: "Genera informes detallados y visualiza estadísticas para tomar decisiones.",
        icon: BarChart3,
        color: "bg-linear-to-r from-[#ff00ff] to-[#00ffff]",
    }
]

export const TESTIMONIALS = [
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