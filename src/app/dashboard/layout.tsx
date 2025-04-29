import { auth } from "@/auth";
import Sidebar from "@/components/dashboard/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { redirect } from "next/navigation";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

/**
Componente `Layout` – Estructura del panel de administración.

Este layout se encarga de mostrar la barra lateral (`Sidebar`) y el contenido desplazable dentro del panel de administración.

Funcionalidades:
- Incluye una barra lateral persistente.
- Permite el scroll del contenido principal con `ScrollArea`.

@component
@param {ReactNode} children - Contenido principal que se muestra junto a la barra lateral.
@returns {JSX.Element} Estructura del layout para las vistas del dashboard.
*/


const Layout: FC<LayoutProps> = async ({ children }) => {

  const session = await auth()

  if(!session?.user){
    redirect("/login")
  }

  return (
    <div className="flex h-screen">
      <Sidebar isAdmin={session.user.role === "ADMIN"} />
      <ScrollArea className="max-h-screen w-full">{children}</ScrollArea>
    </div>
  );
};

export default Layout;
