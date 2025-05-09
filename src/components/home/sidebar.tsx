import Link from "next/link";
import { Logo } from "../icons/logo";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenuButton } from "../ui/sidebar";
import { HOME_LINKS } from "@/constants";

/**
Componente `HomeSidebar` – Barra lateral de navegación para la vista de inicio.

Implementa una sidebar tipo "offcanvas" con enlaces dinámicos cargados desde `HOME_LINKS`.
Incluye encabezado con logo, contenido con botones de navegación y pie de página vacío.

Estructura:
- `SidebarHeader`: contiene el logo de la aplicación.
- `SidebarContent`: lista de enlaces con iconos renderizados mediante `SidebarMenuButton`.
- `SidebarFooter`: reservado para contenido adicional en el futuro.

@returns {JSX.Element} Barra lateral colapsable con navegación principal.
*/

export function HomeSidebar(){
    return(
        <Sidebar collapsible="offcanvas" className="">
            <SidebarHeader className="bg-[#0f0f0f] p-4 flex gap-2 flex-row items-center">
                <Logo />
            </SidebarHeader>
            <SidebarContent className="bg-[#0f0f0f]">
                {HOME_LINKS.map((link, index) => (
                    <SidebarMenuButton key={link + "buttonSidebar"} asChild>
                        <Link key={link + "lnk"} href={link.url} className="text-white font-semibold px-4">
                            <link.icon />
                            {link.slug}
                        </Link>
                    </SidebarMenuButton>
                ))}
            </SidebarContent>
            <SidebarFooter className="bg-[#0f0f0f]" />
        </Sidebar>
    )
}