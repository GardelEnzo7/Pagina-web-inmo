"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import MobileMenu from '@/components/shared/MobileMenu';
import SeccionPropiedades from '@/components/sections/SeccionPropiedades';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import {Search,MapPin,Phone,Mail,Users,TrendingUp,Building,Key,Calculator,FileText,MessageCircle,Facebook,Instagram,} from "lucide-react"
import Image from "next/image"
import Head from 'next/head'
import { useState, useEffect, useRef } from "react"


// Hook para detectar el tamaño de la pantalla (lo integramos aquí para simplicidad)
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Este código solo se ejecuta en el navegador
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
}

export default function InmobiliariaRosario() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showFullNav, setShowFullNav] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const newIsScrolled = scrollTop > 100
      // Debounce para hacer la transición más suave
      if (newIsScrolled !== isScrolled) {
        setTimeout(() => {
          setIsScrolled(newIsScrolled)
        }, 50)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isScrolled])

 // --- FUNCIÓN PARA CONTROLAR LAS CLASES DEL HEADER ---
  const getHeaderClasses = () => {
    const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out";

    if (!isClient) {
      // Clases por defecto en el servidor para evitar "parpadeo"
      return `${baseClasses} bg-white/80 backdrop-blur-md shadow-sm`;
    }

    if (isDesktop) {
      // LÓGICA PARA ESCRITORIO
      if (isScrolled && !showFullNav) {
        return `${baseClasses} bg-transparent backdrop-blur-none`;
      }
      return `${baseClasses} bg-white/80 backdrop-blur-md shadow-sm`;
    } else {
      // LÓGICA PARA CELULAR
      if (isMobileMenuOpen) {
        return `${baseClasses} bg-white shadow-md`;
      }
      if (isScrolled) {
        return `${baseClasses} bg-white/60 backdrop-blur-sm shadow-sm`;
      }
      return `${baseClasses} bg-white/80 backdrop-blur-md shadow-sm`;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        {isClient && (
          isDesktop ? (
            <link rel="preload" as="image" href="/videos/video-desktop.webm" />
          ) : (
            <link rel="preload" as="image" href="/poster-mobile.webp" />
          )
        )}
      </Head>

        {/*Header*/}

    <Header
        isScrolled={isScrolled}
        showFullNav={showFullNav}
        setShowFullNav={setShowFullNav}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        getHeaderClasses={getHeaderClasses}
      />

        {/*Mobile Menu*/}
<MobileMenu 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      {/*Hero Section*/}
<HeroSection isClient={isClient} isDesktop={isDesktop} />

      {/*Stats Section*/}
<StatsSection />

      {/* Seccion Propiedades */}
<SeccionPropiedades/>

      {/* Services Section */}
<ServicesSection/>

      {/* Sell/Rent Your Property - MODIFIED SECTION */}
        <section className="py-16 bg-[#3B4D5B] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Querés vender o alquilar tu propiedad?
              </h2>
              <p className="text-xl mb-8 text-slate-200">
                Te ayudamos a obtener el mejor precio y encontrar los inquilinos
                ideales para tu propiedad
              </p>
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
                  <p className="text-slate-200">Promoción en todos los canales</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#4F6372] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Acompañamiento Total</h3>
                  <p className="text-slate-200">Te guiamos en todo el proceso</p>
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

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactanos</h2>
            <p className="text-xl text-gray-600">Estamos aquí para ayudarte con todas tus necesidades inmobiliarias</p>
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
                    <p className="text-gray-600">info@inmobiliariarosario.com</p>
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

      {/* Footer */}
      <Footer />

      {/* --- WhatsApp Float Button --- */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ease-out
                        ${isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
                        `}>
          <a
            href="https://wa.me/5493411234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-colors flex items-center justify-center w-16 h-16"
          >
            <Image
              src="/icons/icon-wsp.svg"
              alt="Contacto de WhatsApp"
              width={48}
              height={48}
            />
          </a>
      </div>
    </div>
  )
}