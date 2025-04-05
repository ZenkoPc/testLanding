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
      </body>
    </html>
  );
}
