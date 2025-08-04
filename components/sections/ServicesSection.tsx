    // components/sections/ServicesSection.tsx
    "use client"

    import { Card } from "@/components/ui/card";
    import { Building, Key, Calculator, FileText, TrendingUp, Users } from "lucide-react";

    export default function ServicesSection() {
    const services = [
        {
        icon: <Building className="h-8 w-8 text-[#3B4D5B]" />,
        title: "Compra y Venta",
        description: "Te acompañamos en todo el proceso de compra o venta de tu propiedad con asesoramiento profesional.",
        },
        {
        icon: <Key className="h-8 w-8 text-[#3B4D5B]" />,
        title: "Alquileres",
        description: "Gestión completa de alquileres, desde la búsqueda hasta la administración de contratos.",
        },
        {
        icon: <Calculator className="h-8 w-8 text-[#3B4D5B]" />,
        title: "Tasaciones",
        description: "Valuaciones precisas y actualizadas de propiedades realizadas por profesionales certificados.",
        },
        {
        icon: <FileText className="h-8 w-8 text-[#3B4D5B]" />,
        title: "Asesoramiento Legal",
        description: "Soporte legal completo para todas las operaciones inmobiliarias y trámites documentales.",
        },
        {
        icon: <TrendingUp className="h-8 w-8 text-[#3B4D5B]" />,
        title: "Inversiones",
        description: "Asesoramiento especializado en inversiones inmobiliarias y oportunidades de negocio.",
        },
        {
        icon: <Users className="h-8 w-8 text-[#3B4D5B]" />,
        title: "Administración",
        description: "Administración integral de propiedades, consorcios y gestión de inquilinos.",
        },
    ];

    return (
        <section id="servicios" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ofrecemos soluciones integrales para todas tus necesidades inmobiliarias
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-[#4F6372]-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Compra y Venta</h3>
                <p className="text-gray-600">
                    Te acompañamos en todo el proceso de compra o venta de tu propiedad con asesoramiento profesional.
                </p>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Key className="h-8 w-8 text-[#4F6372]-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Alquileres</h3>
                <p className="text-gray-600">
                    Gestión completa de alquileres, desde la búsqueda hasta la administración de contratos.
                </p>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-[#4F6372]-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tasaciones</h3>
                <p className="text-gray-600">
                    Valuaciones precisas y actualizadas de propiedades realizadas por profesionales certificados.
                </p>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-[#4F6372]-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Asesoramiento Legal</h3>
                <p className="text-gray-600">
                    Soporte legal completo para todas las operaciones inmobiliarias y trámites documentales.
                </p>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-[#4F6372]-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inversiones</h3>
                <p className="text-gray-600">
                    Asesoramiento especializado en inversiones inmobiliarias y oportunidades de negocio.
                </p>
                </Card>

                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#4F6372]-600 " />
                </div>
                <h3 className="text-xl font-semibold mb-3">Administración</h3>
                <p className="text-gray-600">
                    Administración integral de propiedades, consorcios y gestión de inquilinos.
                </p>
                </Card>
            </div>
            </div>
        </section>
        );
}