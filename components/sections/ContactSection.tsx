// components/sections/ContactSection.tsx
"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
    Building2, 
    Phone, 
    Mail,
    MapPin,
    MessageCircle,
    Facebook, 
    Instagram, 
    Linkedin 
} from "lucide-react";


export default function ContactSection() {
    return (


        <section id="contacto" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactanos</h2>
                <p className="text-xl text-gray-600">¿Tenés alguna consulta? Dejanos tu mensaje y te contactaremos a la brevedad.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                    <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#4F6372]-600 mr-4 mt-1" />
                    <div>
                        <h4 className="font-semibold">Dirección</h4>
                        <p className="text-gray-600">Av. Pellegrini 1234, Rosario, Santa Fe</p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#4F6372]-600 mr-4 mt-1" />
                    <div>
                        <h4 className="font-semibold">Teléfono</h4>
                        <p className="text-gray-600">+54 341 123-4567</p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#4F6372]-600 mr-4 mt-1" />
                    <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-gray-600">Inmobiliariasenmache@gmail.com</p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <MessageCircle className="h-6 w-6 text-[#4F6372]-600 mr-4 mt-1" />
                    <div>
                        <h4 className="font-semibold">WhatsApp</h4>
                        <p className="text-gray-600">+54 9 341 123-4567</p>
                    </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h4 className="font-semibold mb-4">Horarios de Atención</h4>
                    <div className="text-gray-600">
                    <p>Lunes a Viernes: 9:00 - 18:00</p>
                    <p>Sábados: 9:00 - 13:00</p>
                    <p>Domingos: Cerrado</p>
                    </div>
                </div>

                <div className="mt-8">
                    <h4 className="font-semibold mb-4">Seguinos en Redes</h4>
                    <div className="flex space-x-4">
                    <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors bg-transparent"
                    >
                        <Facebook className="h-4 w-4" />
                    </Button>
                    <a href="https://www.instagram.com/ls.negociosinmobiliarios/" target="_blank">  
                    <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all bg-transparent"
                    >
                        <Instagram className="h-4 w-4" />
                    </Button>
                    </a>
                    <a target="blank" href="https://wa.me/5493411234567">
                        <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors bg-transparent"
                        >
                        <MessageCircle className="h-4 w-4" />
                        </Button>
                    </a>
                    </div>
                </div>
                </div>

                <div>
                <Card className="p-6">
                    <h3 className="text-2xl font-semibold mb-6">Envianos un Mensaje</h3>
                    <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <label className="block text-sm font-medium mb-2">Nombre</label>
                        <Input placeholder="Tu nombre" />
                        </div>
                        <div>
                        <label className="block text-sm font-medium mb-2">Apellido</label>
                        <Input placeholder="Tu apellido" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="tu@email.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Teléfono</label>
                        <Input placeholder="Tu teléfono" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Tipo de Consulta</label>
                        <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="compra">Quiero Comprar</SelectItem>
                            <SelectItem value="venta">Quiero Vender</SelectItem>
                            <SelectItem value="alquiler">Quiero Alquilar</SelectItem>
                            <SelectItem value="consulta">Consulta General</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Mensaje</label>
                        <Textarea placeholder="Contanos en qué podemos ayudarte..." rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                        Enviar Mensaje
                    </Button>
                    </form>
                </Card>
                </div>
            </div>
            </div>
        </section>
    ) 
}