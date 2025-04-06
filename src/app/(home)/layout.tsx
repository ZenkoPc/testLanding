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
        <div className="flex min-h-screen overflow-x-hidden flex-col bg-[#050505]">
          <HomeHeader />
          {children}
          <HomeFooter />
        </div>
      </ThemeProvider>
    </SidebarProvider>
  );
}
