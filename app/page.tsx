"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Users,
  TrendingUp,
  Building,
  Key,
  Calculator,
  FileText,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  PhoneIcon as WhatsApp,
  Bed,
  Bath,
  Square,
  Heart,
  Share2,
  Filter,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function InmobiliariaRosario() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showFullNav, setShowFullNav] = useState(false)

  useEffect(() => {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled && !showFullNav
            ? "bg-transparent backdrop-blur-none border-transparent"
            : "bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-200 hover:bg-white/95 hover:shadow-lg"
        }`}
        onMouseEnter={() => setShowFullNav(true)}
        onMouseLeave={() => setShowFullNav(false)}
      >
        <div className="container mx-auto px-4 py-4 relative">
          {/* Navbar completa */}
          <div
            className={`transition-all duration-700 ease-out transform ${
              isScrolled && !showFullNav
                ? "opacity-0 pointer-events-none scale-95 -translate-y-2"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/logo-3.png"
                      alt="Laura Senmache Negocios Inmobiliarios"
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                    />
                    <div className="hidden sm:block">
                      <h3 className="text-xl font-bold text-gray-900">Laura Senmache</h3>
                      <p className="text-sm text-gray-600">Negocios Inmobiliarios</p>
                    </div>
                  </div>
                </div>
              </div>

              <nav className="hidden md:flex items-center space-x-6 ">
                <Link href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors font-bold">
                  Inicio
                </Link>
                <Link href="#propiedades" className="text-gray-700 hover:text-blue-600 transition-colors font-bold">
                  Propiedades
                </Link>
                <Link href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors font-bold">
                  Servicios
                </Link>
                <Link href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors font-bold ">
                  Contacto
                </Link>
              </nav>

              <div className="flex items-center space-x-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <WhatsApp className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Solo el logo cuando está scrolled - usando el logo-3 más pequeño */}
          <div
            className={`absolute top-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
              isScrolled && !showFullNav
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 pointer-events-none scale-75 translate-y-2"
            }`}
          >
            <div className="bg-white/90 backdrop-blur-md rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-110 cursor-pointer hover:bg-white/95">
              <Image
                src="/logo-3.png"
                alt="Laura Senmache"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
<section className="relative bg-gradient-to-r from-gray-700 to-gray-500 text-white min-h-screen flex items-center overflow-hidden">
{/* Video de fondo */}
<video
autoPlay
loop
muted
className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
>
<source src="/videos/video-hero.webm" type="video/webm" />
Tu navegador no soporta el elemento de video.
</video>

{/* Capa oscura semitransparente para mejorar la legibilidad del texto sobre el video */}

<div className="absolute inset-0 bg-black/20 z-10"></div>

{/* Contenido principal */}

<div className="container mx-auto px-4 relative z-20 py-20">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-bold mb-6">
Encuentra tu hogar ideal en <span className="font-bold bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent">Rosario</span>
</h1>
<p className="text-xl md:text-2xl mb-8 text-blue-100">
Más de 15 años conectando familias con sus hogares soñados en Rosario y alrededores
</p>

  {/* Search Bar */}
  <div className="bg-white rounded-lg p-6 shadow-xl max-w-4xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
      <Select>
        <SelectTrigger className="text-black">
          <SelectValue placeholder="Tipo de propiedad" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="casa">Casa</SelectItem>
          <SelectItem value="departamento">Departamento</SelectItem>
          <SelectItem value="terreno">Terreno</SelectItem>
          <SelectItem value="local">Local Comercial</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="text-black">
          <SelectValue placeholder="¿Querés comprar o alquilar?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="venta">Venta</SelectItem>
          <SelectItem value="alquiler">Alquiler</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="text-black">
          <SelectValue placeholder="¿En qué zona de Rosario?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="centro">Centro</SelectItem>
          <SelectItem value="pichincha">Pichincha</SelectItem>
          <SelectItem value="fisherton">Fisherton</SelectItem>
          <SelectItem value="funes">Funes</SelectItem>
          <SelectItem value="roldan">Roldán</SelectItem>
        </SelectContent>
      </Select>

      <Input placeholder="Ej: $150.000 - Precio máximo" className="text-gray-900" />
    </div>
    <Button className="w-full bg-[#3B4D5B] hover:bg-[#4F6372] text-lg py-3">
      <Search className="h-5 w-5 mr-2" />
      Buscar Propiedades
    </Button>
  </div>
</div>
</div>
</section>

      {/* Stats Section */}
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

      {/* Featured Properties */}
      <section id="propiedades" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Propiedades Destacadas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre las mejores oportunidades inmobiliarias en Rosario y alrededores
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 bg-gray-100 rounded-lg p-2">
              <Button variant="default" size="sm">
                Todas
              </Button>
              <Button variant="ghost" size="sm">
                Venta
              </Button>
              <Button variant="ghost" size="sm">
                Alquiler
              </Button>
              <Button variant="ghost" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Casa en Fisherton"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">Venta</Badge>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button size="sm" variant="secondary" className="p-2">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="p-2">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">Casa en Fisherton</h3>
                  <div className="text-2xl font-bold text-[#4F6372]-900">$180.000</div>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Fisherton, Rosario</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span className="text-sm">3 dorm</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span className="text-sm">2 baños</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span className="text-sm">120 m²</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Hermosa casa con jardín, cochera para 2 autos y quincho. Excelente ubicación cerca de colegios y
                  centros comerciales.
                </p>
                <Button className="w-full">Ver Detalles</Button>
              </CardContent>
            </Card>

            {/* Property Card 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Departamento en Centro"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-orange-600">Alquiler</Badge>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button size="sm" variant="secondary" className="p-2">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="p-2">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">Depto en Centro</h3>
                  <div className="text-2xl font-bold text-[#4F6372]-600">$85.000</div>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Centro, Rosario</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span className="text-sm">2 dorm</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span className="text-sm">1 baño</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span className="text-sm">75 m²</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Moderno departamento en pleno centro de Rosario. Balcón con vista panorámica, cocina integrada y
                  amenities.
                </p>
                <Button className="w-full">Ver Detalles</Button>
              </CardContent>
            </Card>

            {/* Property Card 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Casa en Funes"
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">Venta</Badge>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button size="sm" variant="secondary" className="p-2">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="p-2">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">Casa en Funes</h3>
                  <div className="text-2xl font-bold text-[#4F6372]-600">$320.000</div>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">Funes, Santa Fe</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span className="text-sm">4 dorm</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span className="text-sm">3 baños</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span className="text-sm">200 m²</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Espectacular casa en barrio privado de Funes. Piscina, quincho, jardín parquizado y seguridad 24hs.
                </p>
                <Button className="w-full">Ver Detalles</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Ver Todas las Propiedades
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors bg-transparent"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
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
      <footer className="bg-[#3B4D5B] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo-3.png"
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
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-200 hover:text-white hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              <a href="https://www.instagram.com/ls.negociosinmobiliarios/" target="_blank" >
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                    <Instagram className="h-4 w-4" />
                </Button>
              </a>

                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-200 hover:text-white hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Compra y Venta
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Alquileres
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tasaciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Asesoramiento Legal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Inversiones
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Zonas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Centro
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pichincha
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Fisherton
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Funes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Roldán
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-white">
                <p>Av. Pellegrini 1234</p>
                <p>Rosario, Santa Fe</p>
                <p>+54 341 123-4567</p>
                <p>info@inmobiliariarosario.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-white">
            <p>&copy; 2024 Laura Senmache Negocios Inmobiliarios. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg transition-colors">
          <WhatsApp className="h-2 w-6" />
        </Button>
      </div>
    </div>
  )
}
