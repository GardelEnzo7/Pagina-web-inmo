// components/sections/SellRentSection.tsx
    "use client"

    import { Button } from "@/components/ui/button";
    import { Calculator, TrendingUp, Users } from "lucide-react";

    const features = [
    {
        icon: <Calculator className="h-8 w-8" />,
        title: "Valuación Profesional",
        description: "Análisis de mercado detallado.",
    },
    {
        icon: <TrendingUp className="h-8 w-8" />,
        title: "Marketing Efectivo",
        description: "Promoción en todos los canales.",
    },
    {
        icon: <Users className="h-8 w-8" />,
        title: "Acompañamiento Total",
        description: "Te guiamos en todo el proceso.",
    },
    ];

export default function SellRentSection() {
    return (

            <section className="py-16 bg-[#3B4D5B] text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    ¿Querés vender o alquilar tu propiedad?
                </h2>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                    <div className="bg-[#4F6372] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calculator className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Valuación Profesional</h3>
                    <p className="text-slate-200">Análisis de mercado detallado</p>
                    </div>
                    <div className="text-center">
                    <div className="bg-[#4F6372] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Marketing Efectivo</h3>
                    <p className="text-slate-200">Difusión en los portales inmobiliarios más consultados</p>
                    </div>
                    <div className="text-center">
                    <div className="bg-[#4F6372] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Acompañamiento Total</h3>
                    <p className="text-slate-200">Te asesoramos y acompañamos en todo el proceso</p>
                    </div>
                </div>
                <Button
                    size="lg"
                    variant="secondary"
                    className="text-[#3B4D5B] font-bold"
                >
                    Contactar Ahora
                </Button>
                </div>
            </div>
            </section>
        ) 
    }