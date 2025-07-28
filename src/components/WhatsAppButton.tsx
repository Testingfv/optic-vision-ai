import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Si el footer está visible, mover el botón hacia arriba
        setIsFooterVisible(footerRect.top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre sus productos y promociones.');
    const whatsappUrl = `https://wa.me/541149876543?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={`fixed right-6 z-40 transition-all duration-300 ${
      isFooterVisible ? 'bottom-32' : 'bottom-6'
    }`}>
      <div className="group relative">
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
          Chateá con nosotros
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-900 border-y-4 border-y-transparent"></div>
        </div>

        {/* Botón */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale animate-fade-in"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>

        {/* Indicador de pulso */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  );
};