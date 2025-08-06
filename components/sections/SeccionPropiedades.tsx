// components/sections/SeccionPropiedades.tsx
"use client"

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, MapPin, Bed, Bath, Square, Heart, Share2 } from "lucide-react";
import { todasLasPropiedades } from '@/data/propiedades';
import type { Propiedad } from '@/types';
import PropertyCard from '@/components/cards/PropertyCard';


    export default function SeccionPropiedades() {
    // 1. Estado para guardar el filtro activo
    const [filtroActivo, setFiltroActivo] = useState("todas");
    const [propiedadesVisibles, setPropiedadesVisibles] = useState(3);
    const tabsContainerRef = useRef<HTMLDivElement | null>(null); // Ref para guardar cada botón
    const [sliderStyle, setSliderStyle] = useState({}); // Estado para los estilos del fondo

    useEffect(() => {
        if (tabsContainerRef.current) {
        const activeTabIndex = ["todas", "venta", "alquiler"].indexOf(filtroActivo);
        const activeTab = tabsContainerRef.current.children[activeTabIndex + 1] as HTMLElement; // +1 para saltear el span

        if (activeTab) {
            setSliderStyle({
            left: `${activeTab.offsetLeft}px`,
            width: `${activeTab.offsetWidth}px`,
            });
        }
        }
    }, [filtroActivo]);
    
    // 2. Lógica para filtrar las propiedades
    const propiedadesFiltradas = todasLasPropiedades.filter(prop => {
        if (filtroActivo === "todas") return true;
        return prop.type === filtroActivo;
    }).slice(0, 6);

    const handleVerMas = () => {
        setPropiedadesVisibles(prev => prev + 3);
    };

    return (
        <section id="propiedades" className="py-16">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Propiedades Destacadas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubrí las mejores oportunidades inmobiliarias en Rosario y alrededores
            </p>
            </div>

            {/* --- Contenedor de Botones con Fondo Deslizante --- */}
            <div className="flex justify-center mb-8">
            <div ref={tabsContainerRef} className="relative flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                {/* Fondo Deslizante */}
                <span
                className="absolute top-1 bottom-1 bg-[#3B4D5B] rounded-md shadow-sm transition-all duration-300 ease-in-out"
                style={sliderStyle}
                />

                {/* Botones */}
                <Button
                
                onClick={() => setFiltroActivo("todas")}
                variant={null}
                size="sm"
                className={`relative z-10 transition-colors duration-300 w-20 ${ filtroActivo === 'todas' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
                >
                Todas
                </Button>
                <Button
                
                onClick={() => setFiltroActivo("venta")}
                variant={null}
                size="sm"
                className={`relative z-10 transition-colors duration-300 w-20 ${ filtroActivo === 'venta' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
                >
                Venta
                </Button>
                <Button
                
                onClick={() => setFiltroActivo("alquiler")}
                variant={null}
                size="sm"
                className={`relative z-10 transition-colors duration-300 w-20 ${ filtroActivo === 'alquiler' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
                >
                Alquiler
                </Button>
            </div>
            </div>

            {/* --- Grilla de Propiedades Filtradas --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propiedadesFiltradas.slice(0, propiedadesVisibles).map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
            ))}
            </div>

            {/* --- 3. El Botón Condicional --- */}
            <div className="text-center mt-12">
            {propiedadesVisibles < propiedadesFiltradas.length ? (
                // Si hay más propiedades por mostrar, se muestra "Ver más"
                <Button size="lg" variant="outline" onClick={handleVerMas}>
                Ver más
                </Button>
            ) : (
                // Si ya se mostraron todas, se muestra el botón para ir a la página de propiedades
                <Link href="/propiedades" passHref>
                    <Button size="lg" variant="outline">
                        Ver Todas las Propiedades
                    </Button>
                </Link>
            )}
            </div>
        </div>
        </section>
    );
    }