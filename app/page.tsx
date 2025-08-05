// app/page.tsx
"use client"

// Solo importamos los componentes de las SECCIONES de esta página
import Head from 'next/head';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import SeccionPropiedades from '@/components/sections/SeccionPropiedades';
import ServicesSection from '@/components/sections/ServicesSection';
import SellRentSection from '@/components/sections/SellRentSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/shared/Footer';

export default function PaginaDeInicio() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
            <link rel="preload" as="image" href="/videos/video-desktop.webm" />
            <link rel="preload" as="image" href="/poster-mobile.webp" />
      </Head>

      {/*Hero Section*/}
<HeroSection />

      {/*Stats Section*/}
<StatsSection />

      {/* Seccion Propiedades */}
<SeccionPropiedades/>

      {/* Services Section */}
<ServicesSection/>

      {/* Sell/Rent Section */}
<SellRentSection />

      {/* Contact Section */}
<ContactSection />

      {/* Footer */}
<Footer />

    </div>
  )
}