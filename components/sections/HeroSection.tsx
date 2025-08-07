"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";

// El hook para detectar el tamaño de la pantalla
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

    type ZonaKey = 'todos' | 'centro' | 'pichincha' | 'fisherton' | 'funes' | 'roldan';
    type TipoKey = 'todos' | 'casa' | 'departamento' | 'terreno' | 'cochera' | 'galpon';
    type OperacionKey = 'todos' | 'venta' | 'alquiler';    

    export default function HeroSection() {
    // --- ESTADOS Y LÓGICA (AHORA DENTRO DEL COMPONENTE) ---
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [isClient, setIsClient] = useState(false);
    const [tipoPopoverOpen, setTipoPopoverOpen] = useState(false);
    const [operacionPopoverOpen, setOperacionPopoverOpen] = useState(false);
    const [zonaPopoverOpen, setZonaPopoverOpen] = useState(false);
    const [tipo, setTipo] = useState<TipoKey | "">("");
    const [operacion, setOperacion] = useState<OperacionKey | "">("");
    const [zona, setZona] = useState<ZonaKey>("todos");
    
    const router = useRouter();
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSearch = () => {
        const queryParams = new URLSearchParams();
        // Usamos los valores correctos para la URL
        if (tipo && tipo !== 'todos') queryParams.set("tipo", tipo);
        if (operacion && operacion !== 'todos') queryParams.set("operacion", operacion);
        if (zona && zona !== 'todos') queryParams.set("zona", zona);

        router.push(`/propiedades?${queryParams.toString()}`);
    };
    
    const textosTipo = {
        todos:"Todos los tipos",
        casa: "Casa",
        departamento: "Departamento",
        terreno: "Terreno",
        cochera: "Cochera",
        galpon: "Galpón / Depósito",
        };

    const textosOperacion = {
        todos:"Venta y Alquiler",
        venta: "Venta",
        alquiler: "Alquiler",
        };

    const textosZona = {
        todos: "Todas las zonas",
        centro: "Centro",
        pichincha: "Pichincha",
        fisherton: "Fisherton",
        funes: "Funes",
        roldan: "Roldán",
    };
    
    

    return (
        
        
        <section id="inicio" className="relative text-white min-h-screen flex items-center overflow-hidden">
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

        <div className="absolute inset-0 bg-black/30 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-12">
                Encontrá tu hogar ideal en Rosario
            </h1>

            <br />
            <br />

            {/* Search Bar */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-2xl max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                
                {/* --- Tipo de Propiedad --- */}
                <Popover open={tipoPopoverOpen} onOpenChange={setTipoPopoverOpen} modal={false}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between text-gray-800">
                    {tipo ? textosTipo[tipo] : "Tipo de propiedad"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                    <CommandGroup>
                        <CommandItem onSelect={() => { setTipo("todos"); setTipoPopoverOpen(false); }}>Todos los tipos</CommandItem>
                        <CommandItem onSelect={() => { setTipo("casa"); setTipoPopoverOpen(false); }}>Casa</CommandItem>
                        <CommandItem onSelect={() => { setTipo("departamento"); setTipoPopoverOpen(false); }}>Departamento</CommandItem>
                        <CommandItem onSelect={() => { setTipo("terreno"); setTipoPopoverOpen(false); }}>Terreno</CommandItem>
                        <CommandItem onSelect={() => { setTipo("cochera"); setTipoPopoverOpen(false); }}>Cochera</CommandItem>
                        <CommandItem onSelect={() => { setTipo("galpon"); setTipoPopoverOpen(false); }}>Galpón / Depósito</CommandItem>
                    </CommandGroup>
                    </Command>
                </PopoverContent>
                </Popover>

                {/* --- Operación --- */}
                <Popover open={operacionPopoverOpen} onOpenChange={setOperacionPopoverOpen} modal={false}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between text-gray-800">
                    {operacion ? textosOperacion[operacion] : "Operación"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                    <CommandGroup>
                        <CommandItem onSelect={() => { setOperacion("todos"); setOperacionPopoverOpen(false); }}>Venta y Alquiler</CommandItem>
                        <CommandItem onSelect={() => { setOperacion("venta"); setOperacionPopoverOpen(false); }}>Venta</CommandItem>
                        <CommandItem onSelect={() => { setOperacion("alquiler"); setOperacionPopoverOpen(false); }}>Alquiler</CommandItem>
                    </CommandGroup>
                    </Command>
                </PopoverContent>
                </Popover>

                {/* --- Zona --- */}
                <Popover open={zonaPopoverOpen} onOpenChange={setZonaPopoverOpen} modal={false}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between text-gray-800">
                    {zona ? textosZona[zona] : "Zona"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                    <CommandGroup>
                        <CommandItem onSelect={() => { setZona("todos"); setZonaPopoverOpen(false); }}>Todas las zonas</CommandItem>
                        <CommandItem onSelect={() => { setZona("centro"); setZonaPopoverOpen(false); }}>Centro</CommandItem>
                        <CommandItem onSelect={() => { setZona("pichincha"); setZonaPopoverOpen(false); }}>Pichincha</CommandItem>
                        <CommandItem onSelect={() => { setZona("fisherton"); setZonaPopoverOpen(false); }}>Fisherton</CommandItem>
                        <CommandItem onSelect={() => { setZona("funes"); setZonaPopoverOpen(false); }}>Funes</CommandItem>
                        <CommandItem onSelect={() => { setZona("roldan"); setZonaPopoverOpen(false); }}>Roldán</CommandItem>
                    </CommandGroup>
                    </Command>
                </PopoverContent>
                </Popover>

                <Input placeholder="Precio máximo" />
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