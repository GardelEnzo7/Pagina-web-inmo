// components/shared/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FlagTriangleLeft, Facebook, Instagram, Mail, MessageCircle, Phone, Building2, Key, Calculator, FileText, TrendingUp, MapPin, Navigation } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#3B4D5B] text-white py-12">
            <div className="container mx-auto px-4 items-stretch">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                <div> 
                <div className="bg-[#455c6d] rounded-md px-3 py-4 mb-3 mt-9">
                    <div className="flex items-center space-x-3 mb-4">
                    <Image
                        src="/logo-3.webp"
                        alt="Laura Senmache Negocios Inmobiliarios"
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain"
                    />
                    <div>
                        <h3 className="text-xl font-bold">Laura Senmache</h3>
                        <p className="text-sm text-gray-400">Negocios Inmobiliarios</p>
                    </div>
                    </div>
                <p className="text-white mb-4">
                    Más de 15 años conectando familias con sus hogares soñados en Rosario y alrededores.
                </p>
                </div>
                <div className="flex space-x-4">
                    <Button
                    size="sm"
                    variant="ghost"
                    className="bg-[#455c6d] text-gray-200 hover:text-white hover:bg-blue-600 transition-colors"
                    >
                    <Facebook className="h-4 w-4" />
                    </Button>
                <a href="https://www.instagram.com/ls.negociosinmobiliarios/" target="_blank" >
                    <Button
                    size="sm"
                    variant="ghost"
                    className="bg-[#455c6d] text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all"
                    >
                        <Instagram className="h-4 w-4" />
                    </Button>
                </a>
                <a  target="_blank" href="https://wa.me/5493411234567">
                    <Button
                    size="sm"
                    variant="ghost"
                    className="bg-[#455c6d] text-gray-200 hover:text-white hover:bg-green-600 transition-colors"
                    >
                    <MessageCircle className="h-4 w-4 " />
                    </Button>
                </a>
                </div>
                </div>

                <div>
                <h4 className="text-lg font-semibold mb-2 ">Servicios</h4>
                <ul className="space-y-2 text-gray-300 bg-[#455c6d] p-4 rounded-md">
                    <li>
                    
                    <Link href="#" className="hover:text-white transition-colors">
                        <Building2 className="h-5 w-5 text-[#4F6372]-600 inline-block mr-1" /> Compra y Venta
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="hover:text-white transition-colors">
                        <Key className="h-5 w-5 text-[#4F6372]-600 inline-block mr-2" />Alquileres
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="hover:text-white transition-colors">
                        <Calculator className="h-5 w-5 text-[#4F6372]-600 inline-block mr-2" />Tasaciones
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="hover:text-white transition-colors">
                        <FileText className="h-5 w-5 text-[#4F6372]-600 inline-block mr-2" />Asesoramiento Inmobiliario
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="hover:text-white transition-colors">
                        <TrendingUp className="h-5 w-5 inline-block mr-2" />Marketing Efectivo
                    </Link>
                    </li>
                </ul>
                </div>

                <div>
                <h4 className="text-lg font-semibold mb-2">Zonas</h4>
                <ul className="space-y-2 text-gray-300 bg-[#455c6d] p-4 rounded-md">
                    <li>
                    <Link href="#" className="hover:text-white transition-colors">
                        <FlagTriangleLeft className="h-5 w-5 inline-block mr-2" />Centro
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="hover:text-white transition-colors">
                        <FlagTriangleLeft className="h-5 w-5 inline-block mr-2" />Pichincha
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="hover:text-white transition-colors">
                        <FlagTriangleLeft className="h-5 w-5 inline-block mr-2" />Fisherton
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="hover:text-white transition-colors">
                        <FlagTriangleLeft className="h-5 w-5 inline-block mr-2" />Funes
                    </Link>
                    </li>
                    <li>
                    <Link href="#" className="hover:text-white transition-colors">
                        <FlagTriangleLeft className="h-5 w-5 inline-block mr-2" />Roldán 
                    </Link> 
                    </li>
                </ul>
                </div>

                <div>
                <h4 className="text-lg font-semibold mb-2">Contacto</h4>
                <div className="space-y-2 text-gray-300 bg-[#455c6d] p-4 rounded-md">
                    <a className="hover:text-white transition-colors" target="blank" href="https://www.google.com/maps/place/Av.+Pellegrini+1234,+S2000BTZ+Rosario,+Santa+Fe/@-32.9566704,-60.6454558,17z/data=!3m1!4b1!4m5!3m4!1s0x95b7ab0fab4466a5:0xa701c7ec0f6298cf!8m2!3d-32.9566704!4d-60.6428755?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D">
                    <MapPin className="h-5 w-5 inline-block mr-2" />Av. Pellegrini 1234
                    </a>
                    <a className="block hover:text-white transition-colors" target="blank" href="https://www.google.com/maps/place/Rosario,+Santa+Fe/@-32.9521821,-60.7792114,12z/data=!3m1!4b1!4m6!3m5!1s0x95b6539335d7d75b:0xec4086e90258a557!8m2!3d-32.9587022!4d-60.6930416!16zL20vMDJ0YjE3?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D">
                    <Navigation className="h-5 w-5 inline-block mr-2" />Rosario, Santa Fe
                    </a>
                    <a
                    href="https://wa.me/5493411234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors"
                    >
                    <Phone className="h-5 w-5 inline-block mr-2" />+54 341 123-4567
                    </a>
                    <a href="mailto:Inmobiliariasenmache@gmail.com?subject=Consulta%20desde%20el%20sitio%20web" className="block hover:text-white transition-colors">
                    <Mail className="h-5 w-5 inline-block mr-2" />Inmobiliariasenmache@gmail.com
                    </a>
                </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-white">
                <p>&copy; 2025 Laura Senmache Negocios Inmobiliarios. Todos los derechos reservados.</p>
            </div>
            </div>
        </footer>
    );
}