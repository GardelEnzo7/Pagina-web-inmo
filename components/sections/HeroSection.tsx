    // components/sections/HeroSection.tsx
    "use client"

    import Image from "next/image";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
    import { Search } from "lucide-react";

    // Definimos los props que este componente necesita recibir
    type HeroProps = {
    isClient: boolean;
    isDesktop: boolean;
    };

    export default function HeroSection({ isClient, isDesktop }: HeroProps) {
    return (
        
    <section id="inicio" className="relative bg-gradient-to-r from-gray-700 to-gray-500 text-white min-h-screen flex items-center overflow-hidden">
    {/* --- Video para Desktop --- */}
    <video
    autoPlay
    loop
    muted
    playsInline
    className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 min-w-full min-h-full w-auto h-auto object-cover"
    >
    <source src="/videos/video-desktop.webm" type="video/webm" />
    Tu navegador no soporta el elemento de video.
    </video>


    {/* --- Video para Mobile --- */}
    <video
        autoPlay
        loop
        muted
        playsInline
        className="block md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
        
    >
        <source src="/videos/video-mobile.webm" type="video/webm" />
        Tu navegador no soporta el elemento de video.
    </video>

    {/* Capa oscura semitransparente para mejorar la legibilidad del texto sobre el video */}
    <div className="absolute inset-0 bg-black/10 z-10"></div>

    {/* Contenido principal */}

    <div className="container mx-auto px-4 relative z-20 py-20">
    <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Encuentra tu hogar ideal en <span className="font-bold bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent">Rosario</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
        Más de 15 años conectando familias con sus hogares soñados en Rosario y alrededores
        </p>

    {/* Search Bar */}
    <div className="bg-white rounded-lg p-6 shadow-xl max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <Select>
            <SelectTrigger className="text-black">
            <SelectValue placeholder="Tipo de propiedad" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="casa">Casa</SelectItem>
            <SelectItem value="departamento">Departamento</SelectItem>
            <SelectItem value="terreno">Terreno</SelectItem>
            <SelectItem value="local">Local Comercial</SelectItem>
            </SelectContent>
        </Select>

        <Select>
            <SelectTrigger className="text-black">
            <SelectValue placeholder="¿Querés comprar o alquilar?" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="venta">Venta</SelectItem>
            <SelectItem value="alquiler">Alquiler</SelectItem>
            </SelectContent>
        </Select>

        <Select>
            <SelectTrigger className="text-black">
            <SelectValue placeholder="¿En qué zona de Rosario?" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="centro">Centro</SelectItem>
            <SelectItem value="pichincha">Pichincha</SelectItem>
            <SelectItem value="fisherton">Fisherton</SelectItem>
            <SelectItem value="funes">Funes</SelectItem>
            <SelectItem value="roldan">Roldán</SelectItem>
            </SelectContent>
        </Select>

        <Input placeholder="Ej: $150.000 - Precio máximo" className="text-gray-900" />
        </div>
        <Button className="w-full bg-[#3B4D5B] hover:bg-[#4F6372] text-lg py-3">
        <Search className="h-5 w-5 mr-2" />
        Buscar Propiedades
        </Button>
    </div>
    </div>
    </div>
    </section>
        );
    }