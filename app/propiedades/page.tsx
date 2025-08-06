"use client";

// --- IMPORTS ---
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { todasLasPropiedades } from '@/data/propiedades';
import type { Propiedad } from '@/types';
import PropertyCard from '@/components/cards/PropertyCard';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchX } from "lucide-react";

export default function PaginaPropiedades() {
    
    // --- LÓGICA DE FILTROS ---
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
        <main className="container mx-auto px-4 pt-32 pb-16">
            
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                {/* --- COLUMNA IZQUIERDA: FILTROS --- */}
                <aside className="lg:col-span-1 self-start sticky top-28 bg-gray-600 rounded-md p-7">
                <h3 className="text-xl font-bold mb-6 text-[#f4f4f4]">Filtros</h3>
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium mb-2 text-gray-300">Tipo de Propiedad</label>
                        {/* Para los Select, necesitamos darles un estilo oscuro customizado */}
                        <Select value={filtros.tipo} onValueChange={(valor) => handleFilterChange('tipo', valor)}>
                            <SelectTrigger className="bg-[#f4f4f4] border-gray-600 text-black">
                            <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-[#f4f4f4] border-gray-600 text-white">
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
                            <SelectTrigger className="bg-[#f4f4f4] border-gray-600 text-black">
                            <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-[#f4f4f4] border-gray-600 text-black">
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
            </div> {/* --- FIN DEL DIV "BURBUJA" --- */}
        </main>
        </div>
    );
    }