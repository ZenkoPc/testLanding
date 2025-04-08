import { cn } from "@/lib/utils"

/**
Componente visual de carga (`Skeleton`) que representa un espacio temporal 
mientras se cargan datos reales. Utiliza una animación de parpadeo (`pulse`)
para indicar que el contenido está cargando.

@param className - Clases CSS personalizadas.
@param props - Otras propiedades válidas de un `div`.
*/

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
