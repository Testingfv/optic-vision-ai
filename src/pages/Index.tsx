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
      {/* Navegación */}
      <Navbar />

      {/* Banner de desarrollo - sticky debajo del navbar */}
      <div className="sticky top-0 z-40 bg-red-600 text-white text-center py-2 text-sm font-medium">
        🚧 Sitio en construcción - Próximamente más funcionalidades 🚧
      </div>

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