// app/propiedades/page.tsx
"use client";

// --- IMPORTS ---
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { todasLasPropiedades } from '@/data/propiedades';
import type { Propiedad } from '@/types';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchX, MapPin, Bed, Bath, Square, Heart, Share2 } from "lucide-react";

export default function PaginaPropiedades() {
    const searchParams = useSearchParams();
    const [filtros, setFiltros] = useState({
        tipo: searchParams.get('tipo') || 'todos',
        operacion: searchParams.get('operacion') || 'todos',
        zona: searchParams.get('zona') || 'todos',
    });

    const [propiedadesFiltradas, setPropiedadesFiltradas] = useState<Propiedad[]>([]);

    const handleFilterChange = (filtro: string, valor: string) => {
        setFiltros(prevFiltros => ({
        ...prevFiltros,
        [filtro]: valor,
        }));
    };

    const handleClearFilters = () => {
    setFiltros({
        tipo: 'todos',
        operacion: 'todos',
        zona: 'todos',
    });
    };

    useEffect(() => {
    const filtradas = todasLasPropiedades.filter((prop) => {
    const tipoMatch = filtros.tipo === 'todos' || prop.category === filtros.tipo;
    const operacionMatch = filtros.operacion === 'todos' || prop.type === filtros.operacion;
    
    const locationNormalizada = prop.location.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const zonaMatch = filtros.zona === 'todos' || locationNormalizada.toLowerCase().includes(filtros.zona.toLowerCase());
    
    return tipoMatch && operacionMatch && zonaMatch;
    });
    setPropiedadesFiltradas(filtradas);
}, [filtros]);

    return (
        // Agregamos padding-top para que el contenido no quede oculto debajo del header fijo.
        <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Propiedades Disponibles</h1>
            <p className="text-lg text-gray-600 mt-2">
            {`Mostrando ${propiedadesFiltradas.length} de ${todasLasPropiedades.length} propiedades.`}
            </p>
        </div>

        {/* --- 3. ESTRUCTURA DE 2 COLUMNAS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* --- COLUMNA IZQUIERDA: FILTROS --- */}
            <aside className="lg:col-span-1 bg-[#3B4D5B] p-6 rounded-lg self-start sticky top-28">
            <h3 className="text-xl font-bold mb-6 text-white">Filtros</h3>
            <div className="space-y-6">
                
                <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Tipo de Propiedad</label>
                {/* Para los Select, necesitamos darles un estilo oscuro customizado */}
                <Select value={filtros.tipo} onValueChange={(valor) => handleFilterChange('tipo', valor)}>
                    <SelectTrigger className="bg-[#4F6372] border-gray-600 text-white">
                    <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#4F6372] border-gray-600 text-white">
                    <SelectItem value="todos">Todos los tipos</SelectItem>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="departamento">Departamento</SelectItem>
                    <SelectItem value="terreno">Terreno</SelectItem>
                    <SelectItem value="cochera">Cochera</SelectItem>
                    <SelectItem value="galpon">Galpón / Depósito</SelectItem>
                    </SelectContent>
                </Select>
                </div>

                <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Operación</label>
                <Select value={filtros.operacion} onValueChange={(valor) => handleFilterChange('operacion', valor)}>
                    <SelectTrigger className="bg-[#4F6372] border-gray-600 text-white">
                    <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#4F6372] border-gray-600 text-white">
                    <SelectItem value="todos">Venta y Alquiler</SelectItem>
                    <SelectItem value="venta">Venta</SelectItem>
                    <SelectItem value="alquiler">Alquiler</SelectItem>
                    </SelectContent>
                </Select>
                </div>

                <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Zona</label>
                <Select value={filtros.zona} onValueChange={(valor) => handleFilterChange('zona', valor)}>
                    <SelectTrigger className="bg-[#4F6372] border-gray-600 text-white">
                    <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#4F6372] border-gray-600 text-white">
                    <SelectItem value="todos">Todas las zonas</SelectItem>
                    <SelectItem value="centro">Centro</SelectItem>
                    <SelectItem value="pichincha">Pichincha</SelectItem>
                    <SelectItem value="fisherton">Fisherton</SelectItem>
                    <SelectItem value="funes">Funes</SelectItem>
                    <SelectItem value="roldan">Roldán</SelectItem>
                    </SelectContent>
                </Select>
                </div>
                
                <Button 
                onClick={handleClearFilters} 
                className="w-full bg-white/10 text-white hover:bg-white/20 border border-white/20"
                >
                Limpiar Filtros
                </Button>
                
            </div>
            </aside>

            {/* --- COLUMNA DERECHA: RESULTADOS --- */}
            <main className="lg:col-span-3">
                {propiedadesFiltradas.length > 0 ? (
                    // Si hay propiedades, mostramos la grilla como siempre
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {propiedadesFiltradas.map((prop) => (
                                    <Card key={prop.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                                        <div className="relative">
                                            <Image
                                            src={prop.image}
                                            alt={prop.title}
                                            width={400}
                                            height={250}
                                            className="w-full h-64 object-cover"
                                            />
                                            <Badge className={`absolute top-4 left-4 ${prop.type === 'venta' ? 'bg-green-600' : 'bg-orange-600'}`}>
                                            {prop.type.charAt(0).toUpperCase() + prop.type.slice(1)}
                                            </Badge>
                                            <div className="absolute top-4 right-4 flex space-x-2">
                                            <Button size="icon" variant="secondary" className="rounded-full h-8 w-8"><Heart className="h-4 w-4" /></Button>
                                            <Button size="icon" variant="secondary" className="rounded-full h-8 w-8"><Share2 className="h-4 w-4" /></Button>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-semibold text-gray-900">{prop.title}</h3>
                                            <div className="text-2xl font-bold text-[#3B4D5B]">{prop.price}</div>
                                            </div>
                                            <div className="flex items-center text-gray-600 mb-3">
                                            <MapPin className="h-4 w-4 mr-1" />
                                            <span className="text-sm">{prop.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-4 text-gray-600 mb-4">
                                            <div className="flex items-center"><Bed className="h-4 w-4 mr-1" /><span className="text-sm">{prop.bedrooms} dorm</span></div>
                                            <div className="flex items-center"><Bath className="h-4 w-4 mr-1" /><span className="text-sm">{prop.bathrooms} baños</span></div>
                                            <div className="flex items-center"><Square className="h-4 w-4 mr-1" /><span className="text-sm">{prop.area} m²</span></div>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4 h-10">{prop.description}</p>
                                            <Button className="w-full bg-[#3B4D5B] hover:bg-[#2c3a47]">Ver Detalles</Button>
                                        </CardContent>
                                    </Card>
                    ))}
                    </div>
                ) : (

                    <div className="flex flex-col items-center justify-center text-center h-full min-h-[40vh] bg-gray-50 rounded-lg p-8">
                        <SearchX className="h-16 w-16 text-gray-400 mb-4" />
                        <h3 className="text-2xl font-semibold text-gray-800">
                            No encontramos propiedades con esos criterios
                        </h3>
                        <p className="text-gray-500 mt-2 max-w-sm">
                            Te sugerimos ajustar o limpiar los filtros para ver más opciones disponibles en la zona.
                        </p>
                    </div>
                )}
            </main>
        </div>
        </div>
    );
    }