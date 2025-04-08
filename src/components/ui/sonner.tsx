"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

/**
Componente `Toaster` personalizado que muestra notificaciones tipo *toast*.
Usa el hook `useTheme` para aplicar dinámicamente el tema actual (claro, oscuro o sistema).

@param props - Propiedades del componente `Sonner` de la librería `sonner`.
*/

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      {...props}
    />
  )
}

export { Toaster }
