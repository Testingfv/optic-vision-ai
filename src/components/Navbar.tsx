import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Inicializar en modo oscuro
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Óptica Villalba" 
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
            <span className="font-heading text-xl font-semibold text-primary">
              Óptica Villalba
            </span>
          </div>

          {/* Toggle de Tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-all duration-300 hover-scale"
            aria-label="Cambiar tema"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-secondary-foreground" />
            ) : (
              <Moon className="h-5 w-5 text-secondary-foreground" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};