import type React from "react";
import "@/app/globals.css";

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
        {children}
      </body>
    </html>
  );
}
