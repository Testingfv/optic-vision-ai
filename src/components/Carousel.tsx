import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import promo1 from '@/assets/promo-1.jpg';
import promo2 from '@/assets/promo-2.jpg';
import promo3 from '@/assets/promo-3.jpg';

const slides = [
  {
    id: 1,
    image: promo1,
    title: "Colección Premium",
    description: "Descubre nuestra selección exclusiva de marcos de diseño"
  },
  {
    id: 2,
    image: promo2,
    title: "Estilo Urbano",
    description: "Los anteojos perfectos para tu día a día en la ciudad"
  },
  {
    id: 3,
    image: promo3,
    title: "Tecnología Avanzada",
    description: "Exámenes de la vista con equipamiento de última generación"
  }
];

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleInteraction = () => {
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); // Reanudar después de 10s
  };

  return (
    <section id="carousel" className="relative py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Contenedor del carrusel */}
          <div 
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden group shadow-2xl"
            onMouseDown={handleInteraction}
            onTouchStart={handleInteraction}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 transform translate-x-0' 
                    : index < currentSlide 
                      ? 'opacity-0 transform -translate-x-full'
                      : 'opacity-0 transform translate-x-full'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Superposición con texto */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent">
                  <div className="absolute left-8 bottom-8 text-white max-w-md">
                    <h3 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                      {slide.title}
                    </h3>
                    <p className="font-body text-lg opacity-90">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Botones de navegación */}
            <button
              onClick={() => { prevSlide(); handleInteraction(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <button
              onClick={() => { nextSlide(); handleInteraction(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentSlide(index); handleInteraction(); }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-110' 
                    : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};