import React from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-glasses.jpg';

export const HeroSection = () => {

  const scrollToCarousel = () => {
    document.getElementById('carousel')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Óptica Villalba - Lentes de Precisión"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          ¡Promociones imperdibles todos los días!
        </h1>
        
        <p className="font-body text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-90">
          Cada día sorteamos una promo diferente entre todos nuestros productos. 
          ¡No te pierdas las ofertas exclusivas en lentes y anteojos de diseño!
        </p>

        <div 
          className="cursor-pointer animate-bounce hover:animate-none transition-all duration-300"
          onClick={scrollToCarousel}
        >
          <ChevronDown className="h-12 w-12 mx-auto text-white/80 hover:text-white" />
        </div>
      </div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
    </section>
  );
};