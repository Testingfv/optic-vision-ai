import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-heading text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="font-body text-xl text-muted-foreground mb-6">Página no encontrada</p>
        <p className="font-body text-muted-foreground mb-8">La página que buscás no existe o fue movida.</p>
        <a 
          href="/" 
          className="bg-primary text-primary-foreground font-body font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 hover-lift inline-block"
        >
          Volver al Inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
