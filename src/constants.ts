import { BarChart3, Code, CreditCard, HomeIcon, House, MonitorCogIcon, Package, PhoneCallIcon, SquareKanbanIcon, User, Users } from "lucide-react"
import { Testimonial } from "./types"

/**
Archivo de constantes globales utilizadas en la app.

- `SUCCESS_CASES`: Casos de éxito con estadísticas para mostrar resultados de implementación.
- `SERVICES`: Lista de servicios ofrecidos con descripción e íconos.
- `TESTIMONIALS`: Testimonios de clientes usados para mostrar credibilidad.
- `HOME_LINKS`: Enlaces del menú principal de navegación con íconos.
- `PAGES_LINKS`: Enlaces de autenticación para login y registro.
*/

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
        description: "Sistema de administración de servicios con trazabilidad y reportes avanzados.",
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

export const TESTIMONIALS: Testimonial[] = [
    {
      text: "Esta plataforma ha transformado la manera en que gestionamos nuestros servicios. La interfaz es intuitiva y los roles de usuario nos permiten controlar perfectamente quién accede a qué información.",
      name: "Cliente Satisfecho 1",
      company: "Google",
    },
    {
      text: "Increíble herramienta para la gestión de servicios. Nos ha permitido optimizar nuestros procesos y mejorar la comunicación entre equipos.",
      name: "Cliente Satisfecho 2",
      company: "Apple",
    },
    {
      text: "La mejor inversión que hemos hecho este año. El sistema de roles es exactamente lo que necesitábamos para nuestro equipo distribuido.",
      name: "Cliente Satisfecho 3",
      company: "John deer",
    },
    {
      text: "Excelente plataforma, fácil de usar y con todas las funcionalidades que necesitamos. El soporte técnico es excepcional.",
      name: "Cliente Satisfecho 4",
      company: "Samsung",
    },
    {
      text: "Hemos aumentado nuestra productividad en un 30% desde que empezamos a usar esta plataforma. Totalmente recomendada.",
      name: "Cliente Satisfecho 5",
      company: "Transmilenio",
    },
    {
      text: "La gestión de información nunca había sido tan sencilla. Gracias a esta plataforma, podemos centrarnos en lo que realmente importa.",
      name: "Cliente Satisfecho 6",
      company: "Speed logic",
    },
  ]

export const HOME_LINKS = [
  {
    url: '/',
    slug: "Inicio",
    icon: HomeIcon
  },
  {
    url: '/#services',
    slug: "Servicios",
    icon: MonitorCogIcon
  },
  {
    url: '/login',
    slug: "Dashboard",
    icon: SquareKanbanIcon
  },
  {
    url: '/contact',
    slug: "Contactanos",
    icon: PhoneCallIcon
  }
]

export const PAGES_LINKS = [
  {
    url: '/login',
    slug: "Acceder"
  },
  {
    url: '/register',
    slug: "Crear cuenta"
  },
]

export const ADMIN_SIDEBAR = [
  { label: "Inicio", href: "/dashboard/admin", icon: House },
  { label: "Servicios", href: "/dashboard/admin/services", icon: CreditCard },
  { label: "Productos", href: "/dashboard/admin/products", icon: Package },
  { label: "Usuarios", href: "/dashboard/admin/users", icon: Users }
]

export const USER_SIDEBAR = [
  { label: "Perfil", href: "/dashboard/users", icon: User }
]