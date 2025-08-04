"use client"

export default function StatsSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                <div className="text-3xl font-bold text-[#4F6372] mb-2">500+</div>
                <div className="text-gray-600">Propiedades Vendidas</div>
                </div>
                <div>
                <div className="text-3xl font-bold text-[#4F6372] mb-2">15+</div>
                <div className="text-gray-600">Años de Experiencia</div>
                </div>
                <div>
                <div className="text-3xl font-bold text-[#4F6372] mb-2">98%</div>
                <div className="text-gray-600">Clientes Satisfechos</div>
                </div>
                <div>
                <div className="text-3xl font-bold text-[#4F6372] mb-2">24/7</div>
                <div className="text-gray-600">Atención al Cliente</div>
                </div>
            </div>
            </div>
        </section>
    )
};