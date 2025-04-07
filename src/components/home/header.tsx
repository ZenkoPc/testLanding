"use client"

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Logo } from "../icons/logo";
import { HOME_LINKS } from "@/constants";
import { usePathname } from 'next/navigation';

export function HomeHeader(){

    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 10) {
            setScrolled(true)
          } else {
            setScrolled(false)
          }
        }
    
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return(
        <header
            className={`fixed top-0 z-50 w-full py-4 transition-all duration-300 ${scrolled ? "bg-[#050505]/80 backdrop-blur-md" : "bg-transparent"}`}
        >
            <div className="container flex items-center justify-between">
                <Logo />
                <nav className="hidden lg:flex items-center gap-8">
                    {HOME_LINKS.map((link, index) => {
                        const isActive = pathname === link.url;

                        return (
                        <Link
                            key={link + ' ' + index}
                            href={link.url}
                            className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                            isActive
                                ? 'text-white border-white'
                                : 'text-white/70 border-transparent hover:text-white'
                            }`}
                        >
                            {link.slug}
                        </Link>
                        );
                    })}
                </nav>
                <div className="flex lg:hidden border-2 rounded-lg border-white">
                    <SidebarTrigger className="text-white" />
                </div>
                <div className="hidden lg:flex">
                    <Link href="/contact">
                        <Button className="rounded-full border border-white bg-transparent text-white hover:bg-white/10 transition-colors duration-300 px-5 py-2 h-9">
                            Contacto
                            <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}