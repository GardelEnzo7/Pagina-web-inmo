"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// Los props ahora son mucho más simples
type HeaderProps = {
    isScrolled: boolean;
    showFullNav: boolean;
    setShowFullNav: (isShow: boolean) => void;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
    getHeaderClasses: () => string;
};

export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
return (
    <>
        {/* --- HEADER DESKTOP: LA PÍLDORA FLOTANTE --- */}
        <header className="hidden md:flex fixed top-4 left-0 right-0 z-50 justify-center">
            <div
            className="
                flex items-center justify-between gap-44
                px-4 py-2                               
                bg-[#3B4D5B]/70 backdrop-blur-lg hover:bg-[#3B4D5B] transition-all rounded-full shadow-lg
                border border-white/10
            "
            >
            {/* 1. Logo */}
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0 pl-2">
                <Image src="/logo.webp" alt="Laura Senmache Logo" width={40} height={40} className="h-12 w-12 object-contain" />
                <div>
                <h3 className="text-lg font-bold text-white">Ls</h3>
                <p className="text-xs text-gray-300">Inmobiliaria</p>
                </div>
            </Link>

            {/* 2. Navegación */}
            <nav className="flex items-center space-x-8">
                <Link href="/" className="relative group text-gray-200 hover:text-white transition-colors duration-300 font-bold py-2"><span>Inicio</span><span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link>
                <Link href="/propiedades" className="relative group text-gray-200 hover:text-white transition-colors duration-300 font-bold py-2"><span>Propiedades</span><span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link>
                <Link href="#servicios" className="relative group text-gray-200 hover:text-white transition-colors duration-300 font-bold py-2"><span>Servicios</span><span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link>
                <Link href="#contacto" className="relative group text-gray-200 hover:text-white transition-colors duration-300 font-bold py-2"><span>Contacto</span><span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span></Link>
            </nav>

            {/* 3. WhatsApp */}
            <a href="https://wa.me/5493411234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold py-2 px-4 rounded-full transition-colors hover:bg-green-600 text-sm flex-shrink-0">
                <Image src="/icons/icon-wsp.svg" alt="Icono de Whatsapp" width={24} height={24}/>
                <span>WhatsApp</span>
            </a>
            </div>
        </header>

{/* --- HEADER MOBILE --- */}
        <header className={`md:hidden fixed top-4 left-4 right-4 z-50 bg-[#3B4D5B]/80 backdrop-blur-md shadow-sm rounded-full border border-white/10`}>
        <div className="flex items-center justify-between px-3 py-2">
            
            {/* Columna Izquierda */}
            <div className="flex-1">
                <Button size="icon" variant="ghost" onClick={() => setIsMobileMenuOpen(true)} className="h-10 w-10 text-white rounded-full ">
                    <Menu size={24}/>
                </Button>
            </div>

            {/* Columna Central (Logo) */}
            <div className="flex-none">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image src="/logo.webp" alt="Laura Senmache Logo" width={32} height={32} className="h-8 w-8 object-contain"/>
            </Link>
            </div>

            {/* Columna Derecha */}
            <div className="flex-1 flex justify-end">
            <a href="https://wa.me/5493411234567" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/icon-wsp.svg" alt="Contacto de Whatsapp" width={32} height={32} />
            </a>
            </div>

        </div>
        </header>
        </>
        );
}