import type React from "react";
import "@/app/globals.css";

export const metadata = {
  title: "ServiciosPro - Gestión de Servicios y Usuarios",
  description:
    "Plataforma para la gestión de servicios con sistema de roles de usuario",
};

/**
Componente `RootLayout` – Layout raíz de la aplicación.

Este componente se encarga de envolver toda la aplicación, proporcionando estilos globales y metadatos como título y descripción.

Funcionalidades:
- Aplica estilos globales importados desde `globals.css`.
- Define los metadatos de la app (título y descripción).
- Renderiza dinámicamente el contenido hijo (`children`).

@component
@param {React.ReactNode} children - Elementos hijos a renderizar dentro del layout.
@returns {JSX.Element} Contenedor raíz de la aplicación.
*/


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
