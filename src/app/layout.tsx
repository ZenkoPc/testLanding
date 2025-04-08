import type React from "react";
import "@/app/globals.css";
import { SessionProvider } from "next-auth/react"
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "ServiciosPro - Gestión de Servicios y Usuarios",
  description:
    "Plataforma para la gestión de servicios con sistema de roles de usuario",
};

/**
Componente `RootLayout` – Layout raíz de la aplicación.

Este componente configura la estructura base HTML del proyecto, aplicando el proveedor de sesión (`SessionProvider`)
para la autenticación con NextAuth y añadiendo el componente de notificaciones `Toaster`.

Funcionalidades:
- Aplica la fuente personalizada "Space Grotesk" al body.
- Define metadatos globales para la app.
- Provee el contexto de sesión para la autenticación.
- Integra sistema de notificaciones.

@component
@param {React.ReactNode} children - Componentes hijos que se renderizan dentro del layout.
@returns {JSX.Element} Estructura base HTML de la aplicación.
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        suppressHydrationWarning
      >
        <SessionProvider>
            {children}
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
