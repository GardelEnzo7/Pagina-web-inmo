// components/sections/HeroSection.tsx
"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

// El hook ahora vive aquí adentro, o puede estar en su propio archivo e importarse
    function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
        setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [matches, query]);
    return matches;
    }

    // El componente ya no necesita recibir props
    export default function HeroSection() {
    // La lógica para detectar el dispositivo ahora vive aquí
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Lógica de la barra de búsqueda
    const [tipo, setTipo] = useState("");
    const [operacion, setOperacion] = useState("");
    const [zona, setZona] = useState("");
    const [precioMax, setPrecioMax] = useState("");
    const router = useRouter();
    const handleSearch = () => {
        const queryParams = new URLSearchParams();
        if (tipo) queryParams.set("tipo", tipo);
        if (operacion) queryParams.set("operacion", operacion);
        if (zona) queryParams.set("zona", zona);
        if (precioMax) queryParams.set("precioMax", precioMax);
        router.push(`/propiedades?${queryParams.toString()}`);
    };

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
        Encuentra tu hogar ideal en Rosario
        </h1>
        <br />
        <br />
        {/* <p className="text-xl md:text-2xl mb-8 text-blue-100">
        Más de 15 años conectando familias con sus hogares soñados en Rosario y alrededores
        </p> */}

    {/* Search Bar */}
<div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-2xl max-w-4xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <Select onValueChange={setTipo}>
        <SelectTrigger className="text-black"><SelectValue placeholder="Tipo de propiedad" /></SelectTrigger>
        <SelectContent>
            <SelectItem value="casa">Casa</SelectItem>
            <SelectItem value="departamento">Departamento</SelectItem>
            <SelectItem value="terreno">Terreno</SelectItem>
            <SelectItem value="local">Local Comercial</SelectItem>
        </SelectContent>
        </Select>
        <Select onValueChange={setOperacion}>
        <SelectTrigger className="text-black"><SelectValue placeholder="Operación" /></SelectTrigger>
        <SelectContent>
            <SelectItem value="venta">Venta</SelectItem>
            <SelectItem value="alquiler">Alquiler</SelectItem>
        </SelectContent>
        </Select>
        <Select onValueChange={setZona}>
        <SelectTrigger className="text-black"><SelectValue placeholder="Zona" /></SelectTrigger>
        <SelectContent>
            <SelectItem value="centro">Centro</SelectItem>
            <SelectItem value="pichincha">Pichincha</SelectItem>
            <SelectItem value="fisherton">Fisherton</SelectItem>
            <SelectItem value="funes">Funes</SelectItem>
            <SelectItem value="roldan">Roldán</SelectItem>
        </SelectContent>
        </Select>
        <Input 
        placeholder="Precio máximo" 
        className="text-gray-900" 
        value={precioMax}
        onChange={(e) => setPrecioMax(e.target.value)}
        />
    </div>
    <Button onClick={handleSearch} className="w-full bg-[#3B4D5B] hover:bg-[#2c3a47] text-lg py-3 h-auto">
        <Search className="h-5 w-5 mr-2" />Buscar Propiedades
    </Button>
    </div>
</div>
</div>
</section>
        );
    }