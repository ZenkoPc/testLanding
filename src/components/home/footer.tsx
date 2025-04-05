import Link from "next/link";

export function HomeFooter(){
    return(
        <footer className="w-full bg-[#050505] text-white border-t border-white/10">
            <div className="container py-12 md:py-16">
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full [background:linear-gradient(to_right,#ff00ff,#00ffff)]`}
                        >
                        <span className="text-xl font-bold text-white">S/</span>
                        </div>
                        <span className="text-xl font-bold text-white">ServiciosPro</span>
                    </div>
                    <p className="text-white/70">Soluciones de gestión para empresas de todos los tamaños.</p>
                </div>
                <div className="flex flex-1 justify-center items-start gap-10 flex-col md:flex-row">
                    <div>
                        <h3 className="mb-4 text-lg font-medium">Empresa</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-white/70 hover:text-white">
                                    Contactanos
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white/70 hover:text-white">
                                    Dashboard
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-medium">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-white/70 hover:text-white">
                                    Términos
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/70">
                <p>©2025 ServiciosPro. Todos los derechos reservados.</p>
            </div>
            </div>
        </footer>
    )
}