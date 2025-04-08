import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeSidebar } from "@/components/home/sidebar";
import { HomeHeader } from "@/components/home/header";
import { HomeFooter } from "@/components/home/footer";

export const metadata = {
  title: "ServiciosPro - Gestión de Servicios y Usuarios",
  description:
    "Plataforma para la gestión de servicios con sistema de roles de usuario",
};

/**
Componente `RootLayout` – Estructura principal de la aplicación.

Define el layout base que incluye:
- Sidebar de navegación (`HomeSidebar`)
- Header y Footer comunes a todas las páginas
- Proveedores de contexto para tema (`ThemeProvider`) y estado del sidebar (`SidebarProvider`)

Aplica estilos generales, tema oscuro, y estructura la interfaz general.

@component
@param {Object} props - Props del componente.
@param {React.ReactNode} props.children - Componentes hijos renderizados dentro del layout.
@returns {JSX.Element} Layout principal de la aplicación.
*/


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <HomeSidebar />
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex w-full min-h-screen h-auto overflow-x-hidden flex-col bg-[#050505]">
          <HomeHeader />
          {children}
          <HomeFooter />
        </div>
      </ThemeProvider>
    </SidebarProvider>
  );
}
