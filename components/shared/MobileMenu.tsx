// components/shared/MobileMenu.tsx
"use client"

import Link from "next/link";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";


// Definimos los props que este componente necesita recibir
    type MobileMenuProps = {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
    };

    
    
    export default function MobileMenu({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileMenuProps) {
    return (
        <div
        className={`fixed top-0 left-0 h-full w-full bg-white/95 backdrop-blur-sm z-[60] transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        >
        <div className="flex justify-between items-center p-4 border-b">
            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>
            <h3 className="text-xl font-bold text-gray-900">Menú</h3>
            </a>
            <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsMobileMenuOpen(false)}
            >
            <X className="h-6 w-6" />
            </Button>
        </div>
        <nav className="flex flex-col items-center justify-center space-y-8 mt-16">
            <Link href="#inicio" className="text-2xl text-[#3B4D5B] font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
            Inicio
            </Link>
            <Link href="#propiedades" className="text-2xl text-[#3B4D5B] font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
            Propiedades
            </Link>
            <Link href="#servicios" className="text-2xl text-[#3B4D5B] font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
            Servicios
            </Link>
            <Link href="#contacto" className="text-2xl text-[#3B4D5B] font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
            Contacto
            </Link>
        </nav>
        </div>
    );
    }