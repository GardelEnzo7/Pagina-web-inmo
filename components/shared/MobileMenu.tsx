// components/shared/MobileMenu.tsx
"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Home, Building, Wrench, Mail } from "lucide-react";
import Image from "next/image";


// Definimos los props que este componente necesita recibir
    type MobileMenuProps = {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
    };

    
    
    export default function MobileMenu({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenuProps) {
    return (
    <>
      {/* Fondo oscuro semitransparente */}
        <div
            onClick={() => setIsMobileMenuOpen(false)}
            className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 md:hidden ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        />

        {/* Panel del Menú Lateral */}
        <div
            className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-[#3B4D5B]/70 backdrop-blur-lg z-[60] transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="flex justify-between items-center p-4">
            {/* Izquierda: Logo y Nombre */}
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                <Image
                src="/logo.webp"
                alt="Laura Senmache Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                />
                <div>
                <h3 className="font-bold text-white">Laura Senmache</h3>
                <p className="text-sm text-gray-400">Negocios Inmobiliarios</p>
                </div>
            </Link>

            {/* Derecha: Botón para Cerrar */}
            <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(false)}
                className="h-10 w-10"
            >
                <X className="h-6 w-6 text-gray-700" />
            </Button>
            </div>

            {/* Links de navegación */}
            <nav className="flex flex-col p-6 space-y-1">
            <Link href="/" className="flex items-center gap-4 p-3 rounded-full text-lg text-gray-800 font-medium hover:bg-[#3B4D5B]/80" onClick={() => setIsMobileMenuOpen(false)}>
                <Home className="h-7 w-7 text-white" />
                <span className="font-semibold text-white">Inicio</span>
            </Link>
            <Link href="/propiedades" className="flex items-center gap-4 p-3 rounded-full text-lg text-gray-800 font-medium hover:bg-[#3B4D5B]/80" onClick={() => setIsMobileMenuOpen(false)}>
                <Building className="h-7 w-7 text-white" />
                <span className="font-semibold text-white">Propiedades</span>
            </Link>
            <Link href="#servicios" className="flex items-center gap-4 p-3 rounded-full text-lg text-gray-800 font-medium hover:bg-[#3B4D5B]/80" onClick={() => setIsMobileMenuOpen(false)}>
                <Wrench className="h-7 w-7 text-white" />
                <span className="font-semibold text-white">Servicios</span>
            </Link>
            <Link href="#contacto" className="flex items-center gap-4 p-3 rounded-full text-lg text-gray-800 font-medium hover:bg-[#3B4D5B]/80" onClick={() => setIsMobileMenuOpen(false)}>
                <Mail className="h-7 w-7 text-white" />
                <span className="font-semibold text-white">Contacto</span>
            </Link>
            </nav>
        </div>
        </>
    );
    }