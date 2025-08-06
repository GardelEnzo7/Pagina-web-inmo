// components/cards/PropertyCard.tsx
"use client"

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Heart, Share2 } from "lucide-react";
import type { Propiedad } from '@/types';

// Definimos que el componente recibirá una propiedad como "prop"
type PropertyCardProps = {
    property: Propiedad;
    };

    export default function PropertyCard({ property }: PropertyCardProps) {
    return (
        <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col">
        <div className="relative">
            <Image
            src={property.image}
            alt={property.title}
            width={400}
            height={250}
            className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <Badge className={`absolute top-4 left-4 ${property.type === 'venta' ? 'bg-green-600' : 'bg-orange-600'}`}>
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
            </Badge>
            <div className="absolute top-4 right-4 flex space-x-2">
            <Button size="icon" variant="secondary" className="rounded-full h-8 w-8"><Heart className="h-4 w-4" /></Button>
            <Button size="icon" variant="secondary" className="rounded-full h-8 w-8"><Share2 className="h-4 w-4" /></Button>
            </div>
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
            <div className="text-xl font-bold text-[#3B4D5B]">{property.price}</div>
            </div>
            <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location}</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-600 mb-4">
            <div className="flex items-center"><Bed className="h-4 w-4 mr-1" /><span className="text-sm">{property.bedrooms} dorms</span></div>
            <div className="flex items-center"><Bath className="h-4 w-4 mr-1" /><span className="text-sm">{property.bathrooms} baños</span></div>
            <div className="flex items-center"><Square className="h-4 w-4 mr-1" /><span className="text-sm">{property.area} m²</span></div>
            </div>
            <p className="text-gray-600 text-sm mb-4 flex-grow">{property.description}</p>
            <Button className="w-full mt-auto bg-[#3B4D5B] hover:bg-[#2c3a47]">Ver Detalles</Button>
        </CardContent>
        </Card>
    );
    }