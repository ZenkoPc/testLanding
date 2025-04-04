import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export function HomeHeader(){

    const [scrolled, setScrolled] = useState(false)

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
                <div className="flex items-center gap-2">
                    <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full [background:linear-gradient(to_right,#ff00ff,#00ffff)]`}
                    >
                    <span className="text-xl font-bold text-white">S/</span>
                    </div>
                    <span className="hidden text-xl font-bold text-white sm:inline-block">ServiciosPro</span>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-white border-b-2 border-red-400 pb-1">
                        Inicio
                    </Link>
                    <div className="relative group">
                    <Link
                        href="#servicios"
                        className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white"
                    >
                        Servicios
                    </Link>
                    </div>
                    <Link href="/dashboard" className="text-sm font-medium text-white/80 hover:text-white">
                        Dashboard
                    </Link>
                    <Link href="/contacto" className="text-sm font-medium text-white/80 hover:text-white">
                        Contactanos
                    </Link>
                </nav>
                <div>
                    <Link href="/contacto">
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