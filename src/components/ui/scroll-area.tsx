"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

/**
Componente `ScrollArea` que proporciona una zona de desplazamiento personalizada.
Usa `Radix ScrollArea.Root` y configura el `Viewport`, la `Scrollbar` y la `Corner`.

@param className - Clases adicionales para el contenedor principal.
@param children - Elementos hijos que estarán dentro del área con scroll.
@param props - Cualquier otra propiedad que será pasada al contenedor raíz.
*/

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

/**
Componente `ScrollBar` que representa una barra de desplazamiento personalizada
para orientación vertical u horizontal.
Usa `Radix ScrollAreaScrollbar` y configura su apariencia y comportamiento.

@param className - Clases adicionales para personalizar la barra.
@param orientation - Dirección de desplazamiento: 'vertical' (por defecto) u 'horizontal'.
@param props - Cualquier otra propiedad que será pasada a la barra de scroll.
*/

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }
