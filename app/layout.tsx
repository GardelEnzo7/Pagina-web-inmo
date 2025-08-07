"use client"

import { useState, useEffect } from "react";
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import MobileMenu from '@/components/shared/MobileMenu';
import { Montserrat } from 'next/font/google';
import "./globals.css";
import { usePathname } from 'next/navigation';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Normal, Medium y Bold
  variable: '--font-montserrat',
});

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);
  return matches;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFullNav, setShowFullNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

const getHeaderClasses = () => {
  const base = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out";

  // LÓGICA ÚNICA PARA HEADER OSCURO
  if (!isClient) return `${base} bg-[#3B4D5B]/90 backdrop-blur-md shadow-md`;
  if (isDesktop) {
    if (isScrolled && !showFullNav) return `${base} bg-transparent`;
    return `${base} bg-[#3B4D5B]/90 backdrop-blur-md shadow-md`;
  } else {
    if (isMobileMenuOpen) return `${base} bg-[#3B4D5B] shadow-lg`;
    return isScrolled ? `${base} bg-[#3B4D5B]/70 backdrop-blur-sm shadow-md` : `${base} bg-[#3B4D5B]/90 backdrop-blur-md shadow-md`;
  }
};


  
  return (
    <html lang="es" className={`${montserrat.variable} scroll-smooth`}>
      <head>
        {/* Aquí van etiquetas globales como links a fuentes, etc. */}
        <title>Laura Senmache - Negocios Inmobiliarios</title>
        <meta name="description" content="Encontrá tu hogar ideal en Rosario y alrededores." />
      </head>
      <body>
        <Header
          isScrolled={isScrolled}
          showFullNav={showFullNav}
          setShowFullNav={setShowFullNav}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        
        <main>{children}</main> {/* children es el contenido de cada página */}
        
        <Footer />
      </body>
    </html>
  );
}