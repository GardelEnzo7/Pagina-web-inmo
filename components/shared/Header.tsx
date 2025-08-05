
// 1. Agregamos las importaciones que el Header necesita
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

// 2. Definimos los "props" que el componente recibirá de la página principal
    type HeaderProps = {
    isScrolled: boolean;
    showFullNav: boolean;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
    setShowFullNav: (isShow: boolean) => void;
    getHeaderClasses: () => string;
    };

// 3. Exportamos el componente y le decimos que use los props
    export default function Header({
    isScrolled,
    showFullNav,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    setShowFullNav,
    getHeaderClasses
    }: HeaderProps) {


    return (
            <header
                className={getHeaderClasses()}
                onMouseEnter={() => !isMobileMenuOpen && setShowFullNav(true)}
                onMouseLeave={() => !isMobileMenuOpen && setShowFullNav(false)}
                >
                <div className="container mx-auto px-4 py-2 relative">
                    {/* --- NAVBAR DESKTOP --- */}
                    <div className={`hidden md:flex items-center justify-between transition-all duration-300 ease-out transform ${isScrolled && !showFullNav ? "opacity-0 pointer-events-none scale-95 -translate-y-2" : "opacity-100 scale-100 translate-y-0"}`}>
                    <Link href="/" className="flex items-center space-x-3">
                        <Image src="/logo.webp" alt="Laura Senmache Logo" width={40} height={40} className="h-12 w-12 object-contain" />
                        <div>
                            <h3 className="text-lg font-bold text-white">Laura Senmache</h3>
                            <p className="text-xs text-gray-300">Negocios Inmobiliarios</p>
                        </div>
                    </Link>
                    <nav className="flex items-center space-x-8">
                        <Link href="/" className={`relative group transition-colors duration-300 font-bold py-2 text-gray-200`}>
                            <span>Inicio</span>
                            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-white`}></span>
                        </Link>
                        <Link href="/propiedades" className={`relative group transition-colors duration-300 font-bold py-2 text-gray-200`}>
                            <span>Propiedades</span>
                            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-white`}></span>
                        </Link>
                        <Link href="#servicios" className={`relative group transition-colors duration-300 font-bold py-2 text-gray-200`}>
                            <span>Servicios</span>
                            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-white`}></span>
                        </Link>
                        <Link href="#contacto" className={`relative group transition-colors duration-300 font-bold py-2 text-gray-200`}>
                        <span>Contacto</span>
                        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-white`}></span>
                        </Link>
                    </nav>
                    <a href="https://wa.me/5493411234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold py-2 px-3 rounded-full transition-colors hover:bg-green-600 text-sm">
                        <Image src="/icons/icon-wsp.svg" alt="Icono de Whatsapp" width={30} height={30}/>
                        WhatsApp
                    </a>
                    </div>

                    {/* --- NAVBAR MOBILE --- */}
                    <div className="flex md:hidden items-center justify-between">
                    <div className="flex-1">
                        <Button size="icon" variant={null} onClick={() => setIsMobileMenuOpen(true)} className="h-12 w-12 rounded-full text-white hover:bg-white/20 transition-colors">
                        <Menu color="white" size={28}/>
                        </Button>
                    </div>
                    <div className="flex-none">
                        <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image src="/logo.webp" alt="Laura Senmache" width={40} height={40} className="h-10 w-10 object-contain"/>
                        </a>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <a href="https://wa.me/5493411234567" target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/icon-wsp.svg" alt="Contacto de Whatsapp" className="mr-1" width={40} height={40} />
                        </a>
                    </div>
                    </div>
                </div>
                
                {/* --- Logo Flotante (Burbuja) --- */}
                <div className={`hidden md:block absolute top-4 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out ${isScrolled && !showFullNav ? "opacity-100 scale-100" : "opacity-0 pointer-events-none scale-75"}`}>
                    <a href="#inicio" className="bg-white/90 backdrop-blur-md rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-110 cursor-pointer block">
                    <Image src="/logo-3.webp" alt="Laura Senmache" width={40} height={40} className="h-10 w-10 object-contain"/>
                    </a>
                </div>
            </header>
    );
    }