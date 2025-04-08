"use client";

import { cn } from "@/lib/utils";
import {
  CreditCard,
  House,
  LogOut,
  Menu,
  Package,
  Users,
  X
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {}

/**
Componente `Sidebar` – Barra lateral de navegación del panel de administración.

Muestra enlaces de navegación dependiendo del rol del usuario (actualmente `isAdmin` está en `true`).
Adapta su comportamiento según el tamaño de pantalla mediante el hook `useIsMobile`.

Funcionalidades:
- Enlaces dinámicos con estado activo según la ruta actual.
- Diseño responsive con animaciones de entrada y salida para móviles.
- Botón para cerrar sesión utilizando `signOut()` de `next-auth`.
- Control de apertura/cierre del menú con animaciones y prevención de doble clic rápido.

@component
@returns {JSX.Element} Menú lateral interactivo y responsivo.
*/

const Sidebar: FC<SidebarProps> = ({}) => {
  const isAdmin = true;
  const SideBar = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const links = [
    { label: "Inicio", href: "/dashboard", icon: <House /> },
    { label: "Servicios", href: "/dashboard/services", icon: <CreditCard /> },
    ...(isAdmin
      ? [
          {
            label: "Productos",
            href: "/dashboard/products",
            icon: <Package />,
          },
          { label: "Usuarios", href: "/dashboard/users", icon: <Users /> },
        ]
      : []),
  ];
  const getIsActive = (href: string) => {
    return pathname === href;
  };

  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(true);
  const [menuDisabled, setMenuDisabled] = useState(false);

  const toggleMenu = () => {
    setMenuDisabled(true);
    if (!isOpen) {
      setIsOpen(true);
    } else if (isMobile) {
      SideBar.current?.classList.add("slideOut");
      setTimeout(() => {
        setIsOpen(false);
        SideBar.current?.classList.remove("slideOut");
      }, 500);
    }
    setTimeout(() => {
      setMenuDisabled(false);
    }, 500);
  };
  return (
    <>
      <aside
        ref={SideBar}
        className={cn(
          "fixed text-white left-0 top-0 z-50 flex h-full w-full max-w-none flex-col justify-between border-r border-white/20 bg-neutral-900 px-6 py-8 md:static md:max-w-[300px]",
          {
            hidden: isMobile && !isOpen,
            slideIn: isOpen && isMobile,
          }
        )}
      >
        <div className="flex flex-col gap-14">
          <div className="flex items-center justify-between">
            <h1 className="flex select-none items-center gap-2  text-2xl md:text-3xl font-semibold">
              Dashboard
            </h1>
            {isMobile && (
              <button
                className="cursor-pointer p-2 rounded-xl hover:bg-neutral-700 transition-all"
                disabled={menuDisabled}
                onClick={toggleMenu}
              >
                <X size={24} />
              </button>
            )}
          </div>
          <nav className="flex flex-col gap-3">
            {links.map((link, i) => (
              <Link
                href={link.href}
                key={i}
                onClick={toggleMenu}
                className={cn(
                  "flex select-none items-center gap-4 rounded-lg px-4 py-3 transition-all hover:bg-neutral-950 hover:text-white",
                  {
                    "bg-neutral-950": getIsActive(link.href),
                    "text-muted-foreground": !getIsActive(link.href),
                  }
                )}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <button
          onClick={() => signOut()}
          className="flex cursor-pointer items-center gap-4 rounded-lg px-4 py-3 text-sm text-muted-foreground transition-all hover:bg-neutral-950"
        >
          <LogOut size={18} />
          Cerrar sesión
        </button>
      </aside>
      <button
        disabled={menuDisabled}
        className={cn(
          "cursor-pointer p-2 rounded-xl hover:bg-neutral-700 transition-all bg-neutral-950 border border-white/20",
          {
            "fixed right-4 top-4 z-40 text-white hover:text-white": isMobile,
            hidden: !isMobile,
          }
        )}
        onClick={toggleMenu}
      >
        <Menu />
      </button>
    </>
  );
};

export default Sidebar;
