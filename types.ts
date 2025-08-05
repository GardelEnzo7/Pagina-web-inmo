export type Propiedad = {
    id: number;
    title: string;
    price: string;
    location: string;
    type: 'venta' | 'alquiler';
    category: 'casa' | 'departamento' | 'terreno' | 'local' | 'galpon'| 'cochera';
    bedrooms: number;
    bathrooms: number;
    area: number;
    image: string;
    description: string;
};