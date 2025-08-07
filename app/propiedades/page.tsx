"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { todasLasPropiedades } from '@/data/propiedades';
import type { Propiedad } from '@/types';
import PropertyCard from '@/components/cards/PropertyCard';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchX, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";

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
        // Fondo general gris claro para toda la página
        <div className="bg-slate-100">      
        <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
            
            {/* --- ESTE ES EL NUEVO DIV "BURBUJA" --- */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            
            {/* --- ENCABEZADO DENTRO DE LA BURBUJA --- */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900">Propiedades Disponibles</h1>
                <p className="text-lg text-gray-600 mt-2">
                {`Mostrando ${propiedadesFiltradas.length} de ${todasLasPropiedades.length} propiedades.`}
                </p>
            </div>

            {/* --- ESTRUCTURA PRINCIPAL (FILTROS + RESULTADOS) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* --- COLUMNA IZQUIERDA: FILTROS --- */}
                <aside className="lg:col-span-1 self-start lg:sticky lg:top-28 bg-[#3B4D5B] rounded-md p-7 ">
                <h3 className="text-xl font-bold mb-6 text-[#f4f4f4]">Filtros</h3>
                <div className="space-y-6">
                <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Tipo de Propiedad</label>
                <Popover modal={false}>
                    <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between border-gray-600 text-black">
                        {filtros.tipo === 'todos' ? 'Todos los tipos' : filtros.tipo.charAt(0).toUpperCase() + filtros.tipo.slice(1)}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                        <CommandGroup>
                        <CommandItem onSelect={() => handleFilterChange('tipo', 'todos')}>Todos los tipos</CommandItem>
                        <CommandItem onSelect={() => handleFilterChange('tipo', 'casa')}>Casa</CommandItem>
                        <CommandItem onSelect={() => handleFilterChange('tipo', 'departamento')}>Departamento</CommandItem>
                        <CommandItem onSelect={() => handleFilterChange('tipo', 'terreno')}>Terreno</CommandItem>
                        <CommandItem onSelect={() => handleFilterChange('tipo', 'cochera')}>Cochera</CommandItem>
                        <CommandItem onSelect={() => handleFilterChange('tipo', 'galpon')}>Galpón / Depósito</CommandItem>
                        </CommandGroup>
                    </Command>
                    </PopoverContent>
                </Popover>
                </div>

                <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Operación</label>
                <Popover modal={false}>
                    <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between  border-gray-600 text-black">
                        {filtros.operacion === 'todos' ? 'Venta y Alquiler' : filtros.operacion.charAt(0).toUpperCase() + filtros.operacion.slice(1)}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                        <CommandGroup>
                        <CommandItem onSelect={() => handleFilterChange('operacion', 'todos')}>Venta y Alquiler</CommandItem>
                        <CommandItem onSelect={() => handleFilterChange('operacion', 'venta')}>Venta</CommandItem>
                        <CommandItem onSelect={() => handleFilterChange('operacion', 'alquiler')}>Alquiler</CommandItem>
                        </CommandGroup>
                    </Command>
                    </PopoverContent>
                </Popover>
                </div>

                <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Zona</label>
                <Popover modal={false}>
                    <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between border-gray-600 text-black">
                        {filtros.zona === 'todos' ? 'Todas las zonas' : filtros.zona.charAt(0).toUpperCase() + filtros.zona.slice(1)}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                    <Command>
                        <CommandGroup>
                        <CommandItem onSelect={() => handleFilterChange('zona', 'todos')}>Todas las zonas</CommandItem>
                        <CommandItem onSelect={() => handleFilterChange('zona', 'centro')}>Centro</CommandItem>
                        <CommandItem onSelect={() => handleFilterChange('zona', 'pichincha')}>Pichincha</CommandItem>
                        <CommandItem onSelect={() => handleFilterChange('zona', 'fisherton')}>Fisherton</CommandItem>
                        <CommandItem onSelect={() => handleFilterChange('zona', 'funes')}>Funes</CommandItem>
                        <CommandItem onSelect={() => handleFilterChange('zona', 'roldan')}>Roldán</CommandItem>
                        </CommandGroup>
                    </Command>
                    </PopoverContent>
                </Popover>
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
                <div className="lg:col-span-3">
                {propiedadesFiltradas.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {propiedadesFiltradas.map((prop) => (
                        <PropertyCard key={prop.id} property={prop} />
                    ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center h-full min-h-[40vh] bg-gray-50 rounded-lg p-8">
                    <SearchX className="h-16 w-16 text-gray-400 mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">No encontramos propiedades</h3>
                    <p className="text-gray-500 mt-2 max-w-sm">Te sugerimos ajustar los filtros.</p>
                    </div>
                )}
                </div>
            </div>
            </div>
        </main>
        </div>
    );
    }