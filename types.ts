export type Propiedad = {
    id: number;
    title: string;
    price: string;
    location: string;
    type: 'venta' | 'alquiler'; // Solo permite estos dos valores
    bedrooms: number;
    bathrooms: number;
    area: number;
    image: string;
    description: string;
};