import React from 'react';
import brandsGrid from '@/assets/brands-grid.jpg';

export const BrandsSection = () => {

  const brands = [
    { name: 'Vision Plus', position: 'top-1/4 left-1/4' },
    { name: 'Optic Elite', position: 'top-1/4 right-1/4' },
    { name: 'Clear View', position: 'bottom-1/4 left-1/4' },
    { name: 'Style Frames', position: 'bottom-1/4 right-1/4' }
  ];

  return (
    <section id="marcas" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Marcas de Confianza
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con las mejores marcas del mercado para ofrecerte 
            calidad garantizada y los últimos diseños en lentes y anteojos.
          </p>
        </div>

        {/* Grid de marcas moderno */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Imagen base con las marcas */}
            <img 
              src={brandsGrid} 
              alt="Marcas de Óptica Villalba"
              className="w-full h-96 object-cover rounded-2xl shadow-lg filter grayscale hover:grayscale-0 transition-all duration-700"
            />

            {/* Overlay interactivo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            
            {/* Etiquetas flotantes de marcas */}
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`absolute ${brand.position} transform -translate-x-1/2 -translate-y-1/2`}
              >
                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 hover-scale">
                  <span className="font-body font-medium text-sm text-foreground">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Marcas adicionales en lista */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Ray-Ban', 'Oakley', 'Persol', 'Tom Ford'].map((brand, index) => (
              <div
                key={brand}
                className="text-center p-6 bg-background rounded-xl hover-lift border border-border/50"
              >
                <div className="h-16 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <span className="font-heading text-xl font-bold text-muted-foreground/60">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="mt-16 text-center">
          <p className="font-body text-muted-foreground mb-6">
            ¿Buscás una marca específica? Consultanos, trabajamos con más de 50 marcas diferentes.
          </p>
          <button className="bg-primary text-primary-foreground font-body font-medium px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover-lift">
            Ver Todas las Marcas
          </button>
        </div>
      </div>
    </section>
  );
};