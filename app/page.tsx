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
import Head from 'next/head'
import { useState, useEffect, useRef } from "react"
import { todasLasPropiedades } from '../data/propiedades';
import { Menu, X } from "lucide-react";


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



function SeccionPropiedades() {
  // 1. Estado para guardar el filtro activo
  const [filtroActivo, setFiltroActivo] = useState("todas");
  const [propiedadesVisibles, setPropiedadesVisibles] = useState(3);
  const tabsContainerRef = useRef<HTMLDivElement | null>(null); // Ref para guardar cada botón
  const [sliderStyle, setSliderStyle] = useState({}); // Estado para los estilos del fondo

  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeTabIndex = ["todas", "venta", "alquiler"].indexOf(filtroActivo);
      const activeTab = tabsContainerRef.current.children[activeTabIndex + 1] as HTMLElement; // +1 para saltear el span

      if (activeTab) {
        setSliderStyle({
          left: `${activeTab.offsetLeft}px`,
          width: `${activeTab.offsetWidth}px`,
        });
      }
    }
  }, [filtroActivo]);
  
  // 2. Lógica para filtrar las propiedades
  const propiedadesFiltradas = todasLasPropiedades.filter(prop => {
    if (filtroActivo === "todas") return true;
    return prop.type === filtroActivo;
  }).slice(0, 6);

  const handleVerMas = () => {
    setPropiedadesVisibles(prev => prev + 3);
  };

  return (
    <section id="propiedades" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Propiedades Destacadas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubrí las mejores oportunidades inmobiliarias en Rosario y alrededores
          </p>
        </div>

         {/* --- Contenedor de Botones con Fondo Deslizante --- */}
        <div className="flex justify-center mb-8">
          <div ref={tabsContainerRef} className="relative flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            {/* Fondo Deslizante */}
            <span
              className="absolute top-1 bottom-1 bg-[#3B4D5B] rounded-md shadow-sm transition-all duration-300 ease-in-out"
              style={sliderStyle}
            />

            {/* Botones */}
            <Button
              
              onClick={() => setFiltroActivo("todas")}
              variant={null}
              size="sm"
              className={`relative z-10 transition-colors duration-300 w-20 ${ filtroActivo === 'todas' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
              Todas
            </Button>
            <Button
              
              onClick={() => setFiltroActivo("venta")}
              variant={null}
              size="sm"
              className={`relative z-10 transition-colors duration-300 w-20 ${ filtroActivo === 'venta' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Venta
            </Button>
            <Button
              
              onClick={() => setFiltroActivo("alquiler")}
              variant={null}
              size="sm"
              className={`relative z-10 transition-colors duration-300 w-20 ${ filtroActivo === 'alquiler' ? 'text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Alquiler
            </Button>
          </div>
        </div>

        {/* --- Grilla de Propiedades Filtradas --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propiedadesFiltradas.slice(0, propiedadesVisibles).map((prop) => (
            <Card key={prop.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className={`absolute top-4 left-4 ${prop.type === 'venta' ? 'bg-green-600' : 'bg-orange-600'}`}>
                  {prop.type.charAt(0).toUpperCase() + prop.type.slice(1)}
                </Badge>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button size="icon" variant="secondary" className="rounded-full h-8 w-8"><Heart className="h-4 w-4" /></Button>
                  <Button size="icon" variant="secondary" className="rounded-full h-8 w-8"><Share2 className="h-4 w-4" /></Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{prop.title}</h3>
                  <div className="text-2xl font-bold text-[#3B4D5B]">{prop.price}</div>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{prop.location}</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center"><Bed className="h-4 w-4 mr-1" /><span className="text-sm">{prop.bedrooms} dorm</span></div>
                  <div className="flex items-center"><Bath className="h-4 w-4 mr-1" /><span className="text-sm">{prop.bathrooms} baños</span></div>
                  <div className="flex items-center"><Square className="h-4 w-4 mr-1" /><span className="text-sm">{prop.area} m²</span></div>
                </div>
                <p className="text-gray-600 text-sm mb-4 h-10">{prop.description}</p>
                <Button className="w-full bg-[#3B4D5B] hover:bg-[#2c3a47]">Ver Detalles</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* --- 3. El Botón Condicional --- */}
        <div className="text-center mt-12">
          {propiedadesVisibles < propiedadesFiltradas.length ? (
            // Si hay más propiedades por mostrar, se muestra "Ver más"
            <Button size="lg" variant="outline" onClick={handleVerMas}>
              Ver más
            </Button>
          ) : (
            // Si ya se mostraron todas, se muestra el botón para ir a la página de propiedades
            <Link href="#" passHref>
              <Button size="lg" variant="outline">
                Ver Todas las Propiedades
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
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

    {/* Header */}
<header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
    // MODIFICACIÓN 1: La barra solo se vuelve transparente en ESCRITORIO
    isDesktop && isScrolled && !showFullNav && !isMobileMenuOpen
      ? "bg-transparent backdrop-blur-none"
      : "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200"
  }`}
  onMouseEnter={() => !isMobileMenuOpen && setShowFullNav(true)}
  onMouseLeave={() => !isMobileMenuOpen && setShowFullNav(false)}
  >
  <div className="container mx-auto px-4 py-4 relative">
    
    {/* --- NAVBAR DESKTOP (Estructura Corregida) --- */}
    <div
      className={`hidden md:flex items-center justify-between transition-all duration-300 ease-out transform ${
        // Esta lógica de ocultar/mostrar está bien porque ya es solo para desktop
        isScrolled && !showFullNav
          ? "opacity-0 pointer-events-none scale-95 -translate-y-2"
          : "opacity-100 scale-100 translate-y-0"
      }`}
    >
      {/* 1. Logo */}
      <a href="#inicio">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo-3.webp"
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
      </a>

      {/* 2. Navegación */}
      <nav className="flex items-center space-x-6">
        <Link href="#inicio" className="text-[#3B4D5B] hover:text-[#3B4D5B] transition-colors font-bold">
          Inicio
        </Link>
        <Link href="#propiedades" className="text-[#3B4D5B] hover:text-[#546d81] transition-colors font-bold">
          Propiedades
        </Link>
        <Link href="#servicios" className="text-[#3B4D5B] hover:text-[#546d81] transition-colors font-bold">
          Servicios
        </Link>
        <Link href="#contacto" className="text-[#3B4D5B] hover:text-[#546d81] transition-colors font-bold">
          Contacto
        </Link>
      </nav>

      {/* 3. Botón de WhatsApp */}
      <a
        href="https://wa.me/5493411234567"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white text-green-500 font-semibold py-1 px-4 rounded-full border border-green-500 transition-colors hover:bg-green-500 hover:text-white"
      >
        <Image
          src="/icons/icon-wsp.svg"
          alt="Contacto de Whatsapp"
          className="mr-1"
          width={40}
          height={40}
        />
        Whatsapp
      </a>
    </div>

    {/* --- NAVBAR MOBILE --- */}
    <div className="flex md:hidden items-center justify-between">
      {/* Izquierda: Botón de Menú */}
      <div className="flex-1">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu 
          className="h-7 w-7" />
        </Button>
      </div>

      {/* Centro: Logo */}
      <div className="flex-none">
        <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src="/logo-3.webp"
            alt="Laura Senmache"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
        </a>
      </div>

      {/* Derecha: Botón de WhatsApp */}
      <div className="flex-1 flex justify-end">
        <a href="https://wa.me/5493411234567" target="_blank" rel="noopener noreferrer">
          {/* Se usa el ícono de teléfono por consistencia, podés cambiarlo por tu SVG si querés */}
          <Image
            src="/icons/icon-wsp.svg"
            alt="Contacto de Whatsapp"
            className="mr-1"
            width={40}
            height={40}
        />
        </a>
      </div>
    </div>
  </div>
             {/* --- Logo Flotante (Burbuja) --- */}
  <div
    // MODIFICACIÓN 2: La burbuja solo existe en ESCRITORIO
    className={`hidden md:block absolute top-4 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out ${
      isScrolled && !showFullNav
        ? "opacity-100 scale-100"
        : "opacity-0 pointer-events-none scale-75"
    }`}
  >
    <a href="#inicio" className="bg-white/90 backdrop-blur-md rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-110 cursor-pointer block">
      <Image
        src="/logo-3.webp"
        alt="Laura Senmache"
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
    </a>
  </div>
</header>

{/* --- MENÚ DESPLEGABLE MÓVIL (LA PARTE QUE FALTABA) --- */}
<div
  className={`fixed top-0 left-0 h-full w-full  bg-gray-50 backdrop-blur-md z-[60] transform transition-transform duration-300 ease-in-out md:hidden ${
    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div className="flex justify-between items-center p-4 border-b border-gray-200">
    <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>
      <h3 className="text-xl font-bold text-black">Menú</h3>
    </a>
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <X className="h-6 w-6" />
    </Button>
  </div>
  
  <nav className="flex flex-col items-center justify-center space-y-8 mt-16">
    <Link href="#inicio" className="text-2xl text-[#455c6d] font-bold hover:text-[#3B4D5B]" onClick={() => setIsMobileMenuOpen(false)}>
      Inicio
    </Link>
    <Link href="#propiedades" className="text-2xl text-[#455c6d] font-bold hover:text-[#3B4D5B]" onClick={() => setIsMobileMenuOpen(false)}>
      Propiedades
    </Link>
    <Link href="#servicios" className="text-2xl text-[#455c6d] font-bold hover:text-[#3B4D5B]" onClick={() => setIsMobileMenuOpen(false)}>
      Servicios
    </Link>
    <Link href="#contacto" className="text-2xl text-[#455c6d] font-bold hover:text-[#3B4D5B]" onClick={() => setIsMobileMenuOpen(false)}>
      Contacto
    </Link>
  </nav>
</div>
      

      {/* Hero Section */}
<section id="inicio" className="relative bg-gradient-to-r from-gray-700 to-gray-500 text-white min-h-screen flex items-center overflow-hidden">
{/* --- Video para Desktop (optimizado) --- */}
{/* Se oculta en celulares y se muestra solo en pantallas grandes */}
<video
  autoPlay
  loop
  muted
  playsInline
  className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 min-w-full min-h-full w-auto h-auto object-cover"
>
  <source src="/videos/video-desktop.webm" type="video/webm" />
  Tu navegador no soporta el elemento de video.
</video>


  {/* --- Video para Mobile --- */}
  {/* Se muestra solo en celulares y se oculta en pantallas más grandes */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="block md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
    
  >
    <source src="/videos/video-mobile.webm" type="video/webm" />
    Tu navegador no soporta el elemento de video.
  </video>


{/* Capa oscura semitransparente para mejorar la legibilidad del texto sobre el video */}

<div className="absolute inset-0 bg-black/10 z-10"></div>

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

      {/* Seccion Propiedades */}
      <SeccionPropiedades/>

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
      <footer className="bg-[#3B4D5B] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
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
              <div className="space-y-2 text-gray-300">
                <a className="hover:text-white transition-colors" target="blank" href="https://www.google.com/maps/place/Av.+Pellegrini+1234,+S2000BTZ+Rosario,+Santa+Fe/@-32.9566704,-60.6454558,17z/data=!3m1!4b1!4m5!3m4!1s0x95b7ab0fab4466a5:0xa701c7ec0f6298cf!8m2!3d-32.9566704!4d-60.6428755?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D">
                  Av. Pellegrini 1234
                </a>
                <a className="block hover:text-white transition-colors" target="blank" href="https://www.google.com/maps/place/Rosario,+Santa+Fe/@-32.9521821,-60.7792114,12z/data=!3m1!4b1!4m6!3m5!1s0x95b6539335d7d75b:0xec4086e90258a557!8m2!3d-32.9587022!4d-60.6930416!16zL20vMDJ0YjE3?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D">
                  Rosario, Santa Fe
                  </a>
                <a
                  href="https://wa.me/5493411234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  +54 341 123-4567
                </a>
                <a href="mailto:Inmobiliariasenmache@gmail.com?subject=Consulta%20desde%20el%20sitio%20web" className="block hover:text-white transition-colors">
                  Inmobiliariasenmache@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-white">
            <p>&copy; 2024 Laura Senmache Negocios Inmobiliarios. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

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