import Link from "next/link";
import { Logo } from "../icons/logo";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenuButton } from "../ui/sidebar";
import { HOME_LINKS } from "@/constants";

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