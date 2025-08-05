// components/shared/WhatsAppFloatButton.tsx
"use client"

import Image from "next/image";

// Definimos los props que este componente necesita recibir
type WhatsAppFloatButtonProps = {
    isScrolled: boolean;
};

export default function WhatsAppFloatButton({ isScrolled }: WhatsAppFloatButtonProps) {
    return (
        <div className={`hidden md:flex fixed bottom-6 right-6 z-40 transition-all duration-300 ease-out ${ isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none" }`}>
                <a 
                href="https://wa.me/5493411234567" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center w-16 h-16"
                aria-label="Contactar por WhatsApp"
                >
                <Image 
                src="/icons/icon-wsp.svg" 
                alt="Contacto de WhatsApp" 
                width={45} 
                height={45}
                />
            </a>
        </div>
        );
    }