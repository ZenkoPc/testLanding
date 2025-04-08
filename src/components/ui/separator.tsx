"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

/**
Componente `Separator` que representa una línea divisoria horizontal o vertical,
útil para separar visualmente secciones dentro de una interfaz de usuario.
Basado en `Radix Separator`.

@param className - Clases CSS adicionales para personalización.
@param orientation - Dirección del separador: `"horizontal"` (por defecto) o `"vertical"`.
@param decorative - Indica si el separador es decorativo (no accesible por tecnologías de asistencia).
@param props - Otras propiedades heredadas de `SeparatorPrimitive.Root`.
*/

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
