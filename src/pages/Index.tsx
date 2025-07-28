import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { Carousel } from '@/components/Carousel';
import { InfoSection } from '@/components/InfoSection';
import { BrandsSection } from '@/components/BrandsSection';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner de desarrollo */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-center py-2 text-sm font-medium">
        🚧 Sitio en construcción - Próximamente más funcionalidades 🚧
      </div>

      {/* Espaciador para el banner */}
      <div className="h-10"></div>

      {/* Navegación */}
      <Navbar />

      {/* Contenido principal */}
      <main>
        <HeroSection />
        <Carousel />
        <InfoSection />
        <BrandsSection />
      </main>

      {/* Botón de WhatsApp flotante */}
      <WhatsAppButton />

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default Index;