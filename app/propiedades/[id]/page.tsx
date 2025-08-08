"use client"

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { todasLasPropiedades } from '@/data/propiedades';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, MapPin, Bed, Bath, Square } from 'lucide-react';
import Link from 'next/link';

export default function PaginaDetallePropiedad() {
    const params = useParams();
    const propertyId = params.id;

    // 1. Buscamos la propiedad específica usando el ID de la URL
    const property = todasLasPropiedades.find(p => p.id.toString() === propertyId);

    // 2. Estado para controlar qué imagen de la galería se está viendo
    const [imagenActual, setImagenActual] = useState(0);

  // --- Si no se encuentra la propiedad, mostramos un mensaje y paramos aquí ---
    if (!property) {
        return (
        <div className="container mx-auto text-center py-40">
            <h1 className="text-2xl font-bold">Propiedad no encontrada</h1>
            <p className="text-gray-600 mt-2">La propiedad que buscás no existe o fue removida.</p>
            <Link href="/propiedades">
            <Button className="mt-4">Volver a Propiedades</Button>
            </Link>
        </div>
        );
    }

    // 3. Funciones para navegar en la galería
    const irAImagenSiguiente = () => {
        setImagenActual(current => (current === property.images.length - 1 ? 0 : current + 1));
    };

    const irAImagenAnterior = () => {
        setImagenActual(current => (current === 0 ? property.images.length - 1 : current - 1));
    };
    
    // Si no se encuentra la propiedad, mostramos un mensaje
    if (!property) {
        return <div className="container mx-auto text-center py-40">Propiedad no encontrada.</div>;
    }

    return (
        <div className="container mx-auto px-4 pt-32 pb-16 bg-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-12 lg:gap-12 bg-white rounded-md">
            
            {/* --- COLUMNA IZQUIERDA: GALERÍA DE IMÁGENES --- */}
            <div>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                src={property.images[imagenActual]}
                alt={`Imagen ${imagenActual + 1} de ${property.title}`}
                fill
                className="object-cover transition-opacity duration-300"
                />
                {/* Botones de navegación de la galería */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button onClick={irAImagenAnterior} size="icon" className="rounded-full bg-black/40 hover:bg-black/60">
                    <ArrowLeft className="h-6 w-6" />
                </Button>
                <Button onClick={irAImagenSiguiente} size="icon" className="rounded-full bg-black/40 hover:bg-black/60">
                    <ArrowRight className="h-6 w-6" />
                </Button>
                </div>
            </div>

            {/* Thumbnails (vistas en miniatura) */}
            <div className="grid grid-cols-5 gap-2 mt-4">
                {property.images.map((img, index) => (
                <div
                    key={index}
                    onClick={() => setImagenActual(index)}
                    className={`relative h-20 rounded-md overflow-hidden cursor-pointer transition-all duration-200 ${
                    imagenActual === index ? 'ring-2 ring-blue-500' : 'hover:opacity-80'
                    }`}
                >
                    <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                </div>
                ))}
            </div>
            </div>

            {/* --- COLUMNA DERECHA: INFORMACIÓN --- */}
            <div className="pt-4">
            <h1 className="text-4xl font-bold text-gray-900">{property.title}</h1>
            <p className="text-4xl font-bold text-[#3B4D5B] my-4">{property.price}</p>
            
            <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{property.location}</span>
            </div>

            <div className="flex items-center space-x-6 text-gray-800 my-6 border-y py-4">
                <div className="flex items-center gap-2"><Bed className="h-6 w-6" /><span>{property.bedrooms} dorms</span></div>
                <div className="flex items-center gap-2"><Bath className="h-6 w-6" /><span>{property.bathrooms} baños</span></div>
                <div className="flex items-center gap-2"><Square className="h-6 w-6" /><span>{property.area} m²</span></div>
            </div>
            
            <p className="text-gray-700 mb-8">{property.description}</p>

            <Button size="lg" className="w-full text-lg py-6 bg-green-500 hover:bg-green-600">
                Contactar para más detalles
            </Button>
            </div>
        </div>
        </div>
    );
    }