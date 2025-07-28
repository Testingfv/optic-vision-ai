import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="font-body text-muted-foreground">
            © 2025 Óptica Villalba. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground/75">
            <span>Desarrollado con</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>por</span>
            <a 
              href="https://linkedin.com/in/desarrollador" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <span>Tu Desarrollador</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="pt-4 border-t border-border/30">
            <p className="font-body text-xs text-muted-foreground/60">
              Palermo • Buenos Aires • Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};